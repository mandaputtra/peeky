import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  Operation,
  Observable,
  FetchResult,
} from '@apollo/client/core'
import { onError } from '@apollo/client/link/error'
import { logErrorMessages } from '@vue/apollo-util'
import { createClient, ClientOptions, Client } from 'graphql-ws'
import { print } from 'graphql'

const apiUrl = import.meta.env.VITE_GQL_URL as string

// WebSocket link
let wsUrl: string
if (apiUrl.includes('http')) {
  wsUrl = apiUrl.replace('http', 'ws')
} else {
  wsUrl = `${window.location.protocol.replace('http', 'ws')}${window.location.hostname}:${window.location.port}${apiUrl}`
}

class WebSocketLink extends ApolloLink {
  private client: Client;

  constructor (options: ClientOptions) {
    super()
    this.client = createClient(options)
  }

  public request (operation: Operation): Observable<FetchResult> {
    return new Observable((sink) => {
      return this.client.subscribe<FetchResult>(
        { ...operation, query: print(operation.query) },
        {
          next: sink.next.bind(sink),
          complete: sink.complete.bind(sink),
          error: (err) => {
            if (Array.isArray(err)) {
              return sink.error(
                new Error(err.map(({ message }) => message).join(', ')),
              )
            }

            if (err instanceof CloseEvent) {
              return sink.error(
                new Error(
                  `Socket closed with event ${err.code} ${err.reason || ''}`, // reason will be available on clean closes only
                ),
              )
            }

            return sink.error(err)
          },
        },
      )
    })
  }
}

const wsLink = new WebSocketLink({
  url: wsUrl,
  retryAttempts: Infinity,
})

const link = onError(error => {
  logErrorMessages(error)
}).concat(wsLink)

// Cache implementation
function dedupeRefs (existing: { __ref: string }[], incoming: { __ref: string }[]) {
  const result = existing.map(item => item.__ref)
  for (const item of incoming) {
    if (!result.includes(item.__ref)) {
      result.push(item.__ref)
    }
  }
  return result.map(__ref => ({ __ref }))
}

const cache = new InMemoryCache({
  typePolicies: {
    Run: {
      fields: {
        testSuites: {
          merge: (existing, incoming) => {
            if (!existing) return incoming
            return dedupeRefs(existing, incoming)
          },
        },
      },
    },

    Test: {
      fields: {
        error: {
          merge: false,
        },
      },
    },

    TestSuite: {
      fields: {
        testBySlug: {
          merge: (existing, incoming) => {
            if (existing && incoming.status === 'idle') {
              const existingRef = existing.__ref || `${existing.__typename}:${existing.id}`
              const incomingRef = `${incoming.__typename}:${incoming.id}`
              if (existingRef === incomingRef) {
                return existing
              }
            }
            return incoming
          },
        },
      },
    },
  },
})

// Create the apollo client
export const apolloClient = new ApolloClient({
  link,
  cache,
  connectToDevTools: true,
})

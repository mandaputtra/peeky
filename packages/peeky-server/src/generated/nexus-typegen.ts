/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../context"
import type { RunData } from "./../schema/Run"
import type { RunTestFileData } from "./../schema/RunTestFile"
import type { TestSuiteData } from "./../schema/TestSuite"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  ClearRunInput: { // input type
    id: string; // ID!
  }
  StartRunInput: { // input type
    testFileIds?: string[] | null; // [String!]
  }
  UpdateSettingsInput: { // input type
    darkMode: boolean; // Boolean!
    watch: boolean; // Boolean!
  }
  UpdateSnapshotInput: { // input type
    id: string; // ID!
  }
}

export interface NexusGenEnums {
  Status: "error" | "idle" | "in_progress" | "skipped" | "success" | "todo"
  TestFlag: "only" | "skip" | "todo"
  TestLogType: "stderr" | "stdout"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Mutation: {};
  Query: {};
  Run: RunData;
  RunTestFile: RunTestFileData;
  RunTestFileError: { // root type
    message: string; // String!
  }
  Settings: { // root type
    darkMode: boolean; // Boolean!
    id: string; // ID!
    watch: boolean; // Boolean!
  }
  Snapshot: { // root type
    col?: number | null; // Int
    content: string; // String!
    id: string; // ID!
    line?: number | null; // Int
    newContent?: string | null; // String
    title: string; // String!
    updated?: boolean | null; // Boolean
  }
  Subscription: {};
  Test: { // root type
    duration?: number | null; // Float
    error?: NexusGenRootTypes['TestError'] | null; // TestError
    failedSnapshotCount: number; // Int!
    flag?: NexusGenEnums['TestFlag'] | null; // TestFlag
    id: string; // ID!
    logs: NexusGenRootTypes['TestLog'][]; // [TestLog!]!
    slug: string; // String!
    snapshots: NexusGenRootTypes['Snapshot'][]; // [Snapshot!]!
    status: NexusGenEnums['Status']; // Status!
    title: string; // String!
  }
  TestError: { // root type
    actual?: string | null; // String
    col?: number | null; // Int
    expected?: string | null; // String
    line?: number | null; // Int
    snippet?: string | null; // String
  }
  TestFile: { // root type
    deleted: boolean; // Boolean!
    duration?: number | null; // Float
    id: string; // ID!
    relativePath: string; // String!
    status: NexusGenEnums['Status']; // Status!
  }
  TestLog: { // root type
    text: string; // String!
    type: NexusGenEnums['TestLogType']; // TestLogType!
  }
  TestSuite: TestSuiteData;
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    clearRun: NexusGenRootTypes['Run']; // Run!
    clearRuns: boolean; // Boolean!
    openFileInEditor: boolean | null; // Boolean
    openTestFileInEditor: boolean | null; // Boolean
    startRun: NexusGenRootTypes['Run']; // Run!
    updateSettings: NexusGenRootTypes['Settings']; // Settings!
    updateSnapshot: NexusGenRootTypes['Snapshot'] | null; // Snapshot
  }
  Query: { // field return type
    lastRun: NexusGenRootTypes['Run'] | null; // Run
    run: NexusGenRootTypes['Run'] | null; // Run
    runs: NexusGenRootTypes['Run'][]; // [Run!]!
    settings: NexusGenRootTypes['Settings']; // Settings!
    testFile: NexusGenRootTypes['TestFile'] | null; // TestFile
    testFiles: NexusGenRootTypes['TestFile'][]; // [TestFile!]!
  }
  Run: { // field return type
    duration: number | null; // Float
    emoji: string; // String!
    failedSnapshots: NexusGenRootTypes['Snapshot'][]; // [Snapshot!]!
    id: string; // ID!
    newSnapshots: NexusGenRootTypes['Snapshot'][]; // [Snapshot!]!
    passedSnapshots: NexusGenRootTypes['Snapshot'][]; // [Snapshot!]!
    previousErrorRunTestFiles: NexusGenRootTypes['RunTestFile'][]; // [RunTestFile!]!
    progress: number; // Float!
    runTestFile: NexusGenRootTypes['RunTestFile'] | null; // RunTestFile
    runTestFiles: NexusGenRootTypes['RunTestFile'][]; // [RunTestFile!]!
    status: NexusGenEnums['Status']; // Status!
    testSuiteById: NexusGenRootTypes['TestSuite'] | null; // TestSuite
    testSuiteBySlug: NexusGenRootTypes['TestSuite'] | null; // TestSuite
    testSuites: NexusGenRootTypes['TestSuite'][]; // [TestSuite!]!
    title: string; // String!
  }
  RunTestFile: { // field return type
    duration: number | null; // Float
    error: NexusGenRootTypes['RunTestFileError'] | null; // RunTestFileError
    id: string; // ID!
    slug: string; // String!
    status: NexusGenEnums['Status']; // Status!
    suites: NexusGenRootTypes['TestSuite'][]; // [TestSuite!]!
    testFile: NexusGenRootTypes['TestFile']; // TestFile!
  }
  RunTestFileError: { // field return type
    message: string; // String!
  }
  Settings: { // field return type
    darkMode: boolean; // Boolean!
    id: string; // ID!
    watch: boolean; // Boolean!
  }
  Snapshot: { // field return type
    col: number | null; // Int
    content: string; // String!
    id: string; // ID!
    line: number | null; // Int
    newContent: string | null; // String
    title: string; // String!
    updated: boolean | null; // Boolean
  }
  Subscription: { // field return type
    runAdded: NexusGenRootTypes['Run']; // Run!
    runRemoved: NexusGenRootTypes['Run']; // Run!
    runTestFileUpdated: NexusGenRootTypes['RunTestFile']; // RunTestFile!
    runUpdated: NexusGenRootTypes['Run']; // Run!
    testAdded: NexusGenRootTypes['Test']; // Test!
    testFileAdded: NexusGenRootTypes['TestFile']; // TestFile!
    testFileRemoved: NexusGenRootTypes['TestFile']; // TestFile!
    testFileUpdated: NexusGenRootTypes['TestFile']; // TestFile!
    testSuiteAdded: NexusGenRootTypes['TestSuite']; // TestSuite!
    testSuiteUpdated: NexusGenRootTypes['TestSuite']; // TestSuite!
    testUpdatedBySlug: NexusGenRootTypes['Test']; // Test!
    testUpdatedInRun: NexusGenRootTypes['Test']; // Test!
  }
  Test: { // field return type
    duration: number | null; // Float
    error: NexusGenRootTypes['TestError'] | null; // TestError
    failedSnapshotCount: number; // Int!
    flag: NexusGenEnums['TestFlag'] | null; // TestFlag
    hasLogs: boolean; // Boolean!
    id: string; // ID!
    logs: NexusGenRootTypes['TestLog'][]; // [TestLog!]!
    slug: string; // String!
    snapshotCount: number; // Int!
    snapshots: NexusGenRootTypes['Snapshot'][]; // [Snapshot!]!
    status: NexusGenEnums['Status']; // Status!
    title: string; // String!
  }
  TestError: { // field return type
    actual: string | null; // String
    col: number | null; // Int
    expected: string | null; // String
    line: number | null; // Int
    message: string; // String!
    snippet: string | null; // String
    stack: string | null; // String
  }
  TestFile: { // field return type
    deleted: boolean; // Boolean!
    duration: number | null; // Float
    id: string; // ID!
    relativePath: string; // String!
    status: NexusGenEnums['Status']; // Status!
  }
  TestLog: { // field return type
    text: string; // String!
    type: NexusGenEnums['TestLogType']; // TestLogType!
  }
  TestSuite: { // field return type
    duration: number | null; // Float
    id: string; // ID!
    runTestFile: NexusGenRootTypes['RunTestFile']; // RunTestFile!
    slug: string; // String!
    status: NexusGenEnums['Status']; // Status!
    testById: NexusGenRootTypes['Test'] | null; // Test
    testBySlug: NexusGenRootTypes['Test'] | null; // Test
    tests: Array<NexusGenRootTypes['Test'] | null>; // [Test]!
    title: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    clearRun: 'Run'
    clearRuns: 'Boolean'
    openFileInEditor: 'Boolean'
    openTestFileInEditor: 'Boolean'
    startRun: 'Run'
    updateSettings: 'Settings'
    updateSnapshot: 'Snapshot'
  }
  Query: { // field return type name
    lastRun: 'Run'
    run: 'Run'
    runs: 'Run'
    settings: 'Settings'
    testFile: 'TestFile'
    testFiles: 'TestFile'
  }
  Run: { // field return type name
    duration: 'Float'
    emoji: 'String'
    failedSnapshots: 'Snapshot'
    id: 'ID'
    newSnapshots: 'Snapshot'
    passedSnapshots: 'Snapshot'
    previousErrorRunTestFiles: 'RunTestFile'
    progress: 'Float'
    runTestFile: 'RunTestFile'
    runTestFiles: 'RunTestFile'
    status: 'Status'
    testSuiteById: 'TestSuite'
    testSuiteBySlug: 'TestSuite'
    testSuites: 'TestSuite'
    title: 'String'
  }
  RunTestFile: { // field return type name
    duration: 'Float'
    error: 'RunTestFileError'
    id: 'ID'
    slug: 'String'
    status: 'Status'
    suites: 'TestSuite'
    testFile: 'TestFile'
  }
  RunTestFileError: { // field return type name
    message: 'String'
  }
  Settings: { // field return type name
    darkMode: 'Boolean'
    id: 'ID'
    watch: 'Boolean'
  }
  Snapshot: { // field return type name
    col: 'Int'
    content: 'String'
    id: 'ID'
    line: 'Int'
    newContent: 'String'
    title: 'String'
    updated: 'Boolean'
  }
  Subscription: { // field return type name
    runAdded: 'Run'
    runRemoved: 'Run'
    runTestFileUpdated: 'RunTestFile'
    runUpdated: 'Run'
    testAdded: 'Test'
    testFileAdded: 'TestFile'
    testFileRemoved: 'TestFile'
    testFileUpdated: 'TestFile'
    testSuiteAdded: 'TestSuite'
    testSuiteUpdated: 'TestSuite'
    testUpdatedBySlug: 'Test'
    testUpdatedInRun: 'Test'
  }
  Test: { // field return type name
    duration: 'Float'
    error: 'TestError'
    failedSnapshotCount: 'Int'
    flag: 'TestFlag'
    hasLogs: 'Boolean'
    id: 'ID'
    logs: 'TestLog'
    slug: 'String'
    snapshotCount: 'Int'
    snapshots: 'Snapshot'
    status: 'Status'
    title: 'String'
  }
  TestError: { // field return type name
    actual: 'String'
    col: 'Int'
    expected: 'String'
    line: 'Int'
    message: 'String'
    snippet: 'String'
    stack: 'String'
  }
  TestFile: { // field return type name
    deleted: 'Boolean'
    duration: 'Float'
    id: 'ID'
    relativePath: 'String'
    status: 'Status'
  }
  TestLog: { // field return type name
    text: 'String'
    type: 'TestLogType'
  }
  TestSuite: { // field return type name
    duration: 'Float'
    id: 'ID'
    runTestFile: 'RunTestFile'
    slug: 'String'
    status: 'Status'
    testById: 'Test'
    testBySlug: 'Test'
    tests: 'Test'
    title: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    clearRun: { // args
      input: NexusGenInputs['ClearRunInput']; // ClearRunInput!
    }
    openFileInEditor: { // args
      col: number; // Int!
      line: number; // Int!
      path: string; // String!
    }
    openTestFileInEditor: { // args
      col: number; // Int!
      id: string; // ID!
      line: number; // Int!
    }
    startRun: { // args
      input: NexusGenInputs['StartRunInput']; // StartRunInput!
    }
    updateSettings: { // args
      input: NexusGenInputs['UpdateSettingsInput']; // UpdateSettingsInput!
    }
    updateSnapshot: { // args
      input: NexusGenInputs['UpdateSnapshotInput']; // UpdateSnapshotInput!
    }
  }
  Query: {
    run: { // args
      id: string; // ID!
    }
    testFile: { // args
      id: string; // ID!
    }
  }
  Run: {
    runTestFile: { // args
      slug: string; // String!
    }
    testSuiteById: { // args
      id: string; // ID!
    }
    testSuiteBySlug: { // args
      slug: string; // String!
    }
  }
  Subscription: {
    testAdded: { // args
      runId: string; // ID!
      runTestFileId?: string | null; // ID
    }
    testSuiteAdded: { // args
      runId: string; // ID!
      runTestFileId?: string | null; // ID
    }
    testSuiteUpdated: { // args
      runId: string; // ID!
      runTestFileId?: string | null; // ID
    }
    testUpdatedBySlug: { // args
      runId: string; // ID!
      testSlug: string; // String!
    }
    testUpdatedInRun: { // args
      runId: string; // ID!
      runTestFileId?: string | null; // ID
    }
  }
  TestSuite: {
    testById: { // args
      id: string; // ID!
    }
    testBySlug: { // args
      slug: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}
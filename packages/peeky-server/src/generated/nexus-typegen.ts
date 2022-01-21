/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../context"
import type { RunData } from "./../schema/Run"
import type { RunTestFileData } from "./../schema/RunTestFile"
import type { SnapshotData } from "./../schema/Snapshot"
import type { TestData } from "./../schema/Test"
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
  Snapshot: SnapshotData;
  Subscription: {};
  Test: TestData;
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
  TestSuiteChild: NexusGenRootTypes['Test'] | NexusGenRootTypes['TestSuite'];
}

export type NexusGenRootTypes = NexusGenObjects & NexusGenUnions

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
    testSuiteById: NexusGenRootTypes['TestSuite'] | null; // TestSuite
  }
  Run: { // field return type
    allTestSuites: NexusGenRootTypes['TestSuite'][]; // [TestSuite!]!
    date: string; // String!
    duration: number | null; // Float
    emoji: string; // String!
    failedSnapshotCount: number; // Int!
    failedSnapshots: NexusGenRootTypes['Snapshot'][]; // [Snapshot!]!
    id: string; // ID!
    newSnapshots: NexusGenRootTypes['Snapshot'][]; // [Snapshot!]!
    nextSnapshot: NexusGenRootTypes['Snapshot'] | null; // Snapshot
    passedSnapshots: NexusGenRootTypes['Snapshot'][]; // [Snapshot!]!
    previousErrorRunTestFiles: NexusGenRootTypes['RunTestFile'][]; // [RunTestFile!]!
    previousSnapshot: NexusGenRootTypes['Snapshot'] | null; // Snapshot
    progress: number; // Float!
    rootTestSuites: NexusGenRootTypes['TestSuite'][]; // [TestSuite!]!
    runTestFile: NexusGenRootTypes['RunTestFile'] | null; // RunTestFile
    runTestFiles: NexusGenRootTypes['RunTestFile'][]; // [RunTestFile!]!
    snapshotById: NexusGenRootTypes['Snapshot'] | null; // Snapshot
    snapshotCount: number; // Int!
    status: NexusGenEnums['Status']; // Status!
    testCount: number; // Int!
    testSuiteById: NexusGenRootTypes['TestSuite'] | null; // TestSuite
    testSuiteBySlug: NexusGenRootTypes['TestSuite'] | null; // TestSuite
  }
  RunTestFile: { // field return type
    allTestSuites: NexusGenRootTypes['TestSuite'][]; // [TestSuite!]!
    duration: number | null; // Float
    error: NexusGenRootTypes['RunTestFileError'] | null; // RunTestFileError
    id: string; // ID!
    rootTestSuites: NexusGenRootTypes['TestSuite'][]; // [TestSuite!]!
    slug: string; // String!
    status: NexusGenEnums['Status']; // Status!
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
    failed: boolean; // Boolean!
    id: string; // ID!
    line: number | null; // Int
    newContent: string | null; // String
    test: NexusGenRootTypes['Test']; // Test!
    title: string; // String!
    updated: boolean | null; // Boolean
  }
  Subscription: { // field return type
    runAdded: NexusGenRootTypes['Run']; // Run!
    runRemoved: NexusGenRootTypes['Run']; // Run!
    runStatsUpdated: NexusGenRootTypes['Run'] | null; // Run
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
    suite: NexusGenRootTypes['TestSuite']; // TestSuite!
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
    allTitles: Array<string | null>; // [String]!
    children: NexusGenRootTypes['TestSuiteChild'][]; // [TestSuiteChild!]!
    duration: number | null; // Float
    id: string; // ID!
    parentSuite: NexusGenRootTypes['TestSuite'] | null; // TestSuite
    root: boolean; // Boolean!
    runTestFile: NexusGenRootTypes['RunTestFile']; // RunTestFile!
    slug: string; // String!
    status: NexusGenEnums['Status']; // Status!
    testById: NexusGenRootTypes['Test'] | null; // Test
    testBySlug: NexusGenRootTypes['Test'] | null; // Test
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
    testSuiteById: 'TestSuite'
  }
  Run: { // field return type name
    allTestSuites: 'TestSuite'
    date: 'String'
    duration: 'Float'
    emoji: 'String'
    failedSnapshotCount: 'Int'
    failedSnapshots: 'Snapshot'
    id: 'ID'
    newSnapshots: 'Snapshot'
    nextSnapshot: 'Snapshot'
    passedSnapshots: 'Snapshot'
    previousErrorRunTestFiles: 'RunTestFile'
    previousSnapshot: 'Snapshot'
    progress: 'Float'
    rootTestSuites: 'TestSuite'
    runTestFile: 'RunTestFile'
    runTestFiles: 'RunTestFile'
    snapshotById: 'Snapshot'
    snapshotCount: 'Int'
    status: 'Status'
    testCount: 'Int'
    testSuiteById: 'TestSuite'
    testSuiteBySlug: 'TestSuite'
  }
  RunTestFile: { // field return type name
    allTestSuites: 'TestSuite'
    duration: 'Float'
    error: 'RunTestFileError'
    id: 'ID'
    rootTestSuites: 'TestSuite'
    slug: 'String'
    status: 'Status'
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
    failed: 'Boolean'
    id: 'ID'
    line: 'Int'
    newContent: 'String'
    test: 'Test'
    title: 'String'
    updated: 'Boolean'
  }
  Subscription: { // field return type name
    runAdded: 'Run'
    runRemoved: 'Run'
    runStatsUpdated: 'Run'
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
    suite: 'TestSuite'
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
    allTitles: 'String'
    children: 'TestSuiteChild'
    duration: 'Float'
    id: 'ID'
    parentSuite: 'TestSuite'
    root: 'Boolean'
    runTestFile: 'RunTestFile'
    slug: 'String'
    status: 'Status'
    testById: 'Test'
    testBySlug: 'Test'
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
    testSuiteById: { // args
      id: string; // ID!
    }
  }
  Run: {
    nextSnapshot: { // args
      id: string; // ID!
    }
    previousSnapshot: { // args
      id: string; // ID!
    }
    runTestFile: { // args
      slug: string; // String!
    }
    snapshotById: { // args
      id: string; // ID!
    }
    testCount: { // args
      status?: NexusGenEnums['Status'] | null; // Status
    }
    testSuiteById: { // args
      id: string; // ID!
    }
    testSuiteBySlug: { // args
      slug: string; // String!
    }
  }
  Subscription: {
    runStatsUpdated: { // args
      runId: string; // ID!
    }
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
  TestSuiteChild: "Test" | "TestSuite"
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = keyof NexusGenUnions;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = "TestSuiteChild";

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
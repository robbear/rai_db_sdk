# rai_db_sdk

RaiDbSdk - JavaScript client for rai_db_sdk
This is a Client SDK for Delve API
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.1.3
- Package version: 1.1.3
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://www.relational.ai/support](https://www.relational.ai/support)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install rai_db_sdk --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your rai_db_sdk from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var RaiDbSdk = require('rai_db_sdk');


var api = new RaiDbSdk.DefaultApi()
var transaction = new RaiDbSdk.Transaction(); // {Transaction} Optional description in *Markdown*
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transactionPost(transaction, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://127.0.0.1:8010*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*RaiDbSdk.DefaultApi* | [**transactionPost**](docs/DefaultApi.md#transactionPost) | **POST** /transaction | Issues a transaction to be executed


## Documentation for Models

 - [RaiDbSdk.AbstractProblem](docs/AbstractProblem.md)
 - [RaiDbSdk.Action](docs/Action.md)
 - [RaiDbSdk.ActionResult](docs/ActionResult.md)
 - [RaiDbSdk.Appl](docs/Appl.md)
 - [RaiDbSdk.Area](docs/Area.md)
 - [RaiDbSdk.ArityMismatchError](docs/ArityMismatchError.md)
 - [RaiDbSdk.AzureIntegration](docs/AzureIntegration.md)
 - [RaiDbSdk.CSVFileSchema](docs/CSVFileSchema.md)
 - [RaiDbSdk.CSVFileSyntax](docs/CSVFileSyntax.md)
 - [RaiDbSdk.CardinalityAction](docs/CardinalityAction.md)
 - [RaiDbSdk.CardinalityActionResult](docs/CardinalityActionResult.md)
 - [RaiDbSdk.ClientProblem](docs/ClientProblem.md)
 - [RaiDbSdk.CollectProblemsAction](docs/CollectProblemsAction.md)
 - [RaiDbSdk.CollectProblemsActionResult](docs/CollectProblemsActionResult.md)
 - [RaiDbSdk.ComparisonChainError](docs/ComparisonChainError.md)
 - [RaiDbSdk.Cons](docs/Cons.md)
 - [RaiDbSdk.DefaultIntegration](docs/DefaultIntegration.md)
 - [RaiDbSdk.ExceptionProblem](docs/ExceptionProblem.md)
 - [RaiDbSdk.FileSchema](docs/FileSchema.md)
 - [RaiDbSdk.FileSyntax](docs/FileSyntax.md)
 - [RaiDbSdk.FrontProblem](docs/FrontProblem.md)
 - [RaiDbSdk.ICViolation](docs/ICViolation.md)
 - [RaiDbSdk.ImportAction](docs/ImportAction.md)
 - [RaiDbSdk.ImportActionResult](docs/ImportActionResult.md)
 - [RaiDbSdk.InfraError](docs/InfraError.md)
 - [RaiDbSdk.InstallAction](docs/InstallAction.md)
 - [RaiDbSdk.InstallActionResult](docs/InstallActionResult.md)
 - [RaiDbSdk.Integration](docs/Integration.md)
 - [RaiDbSdk.IntegrityConstraintProblem](docs/IntegrityConstraintProblem.md)
 - [RaiDbSdk.IntegrityConstraintViolation](docs/IntegrityConstraintViolation.md)
 - [RaiDbSdk.JSONFileSchema](docs/JSONFileSchema.md)
 - [RaiDbSdk.JSONFileSyntax](docs/JSONFileSyntax.md)
 - [RaiDbSdk.LabeledAction](docs/LabeledAction.md)
 - [RaiDbSdk.LabeledActionResult](docs/LabeledActionResult.md)
 - [RaiDbSdk.LinkedList](docs/LinkedList.md)
 - [RaiDbSdk.ListEdbAction](docs/ListEdbAction.md)
 - [RaiDbSdk.ListEdbActionResult](docs/ListEdbActionResult.md)
 - [RaiDbSdk.ListSourceAction](docs/ListSourceAction.md)
 - [RaiDbSdk.ListSourceActionResult](docs/ListSourceActionResult.md)
 - [RaiDbSdk.Literal](docs/Literal.md)
 - [RaiDbSdk.LoadData](docs/LoadData.md)
 - [RaiDbSdk.LoadDataAction](docs/LoadDataAction.md)
 - [RaiDbSdk.LoadDataActionResult](docs/LoadDataActionResult.md)
 - [RaiDbSdk.ModifyWorkspaceAction](docs/ModifyWorkspaceAction.md)
 - [RaiDbSdk.ModifyWorkspaceActionResult](docs/ModifyWorkspaceActionResult.md)
 - [RaiDbSdk.Nil](docs/Nil.md)
 - [RaiDbSdk.OutputProblem](docs/OutputProblem.md)
 - [RaiDbSdk.PairAnyValueAnyValue](docs/PairAnyValueAnyValue.md)
 - [RaiDbSdk.PairSymbolString](docs/PairSymbolString.md)
 - [RaiDbSdk.ParseAction](docs/ParseAction.md)
 - [RaiDbSdk.ParseActionResult](docs/ParseActionResult.md)
 - [RaiDbSdk.PersistProblem](docs/PersistProblem.md)
 - [RaiDbSdk.Point](docs/Point.md)
 - [RaiDbSdk.QueryAction](docs/QueryAction.md)
 - [RaiDbSdk.QueryActionResult](docs/QueryActionResult.md)
 - [RaiDbSdk.Range](docs/Range.md)
 - [RaiDbSdk.RelKey](docs/RelKey.md)
 - [RaiDbSdk.Relation](docs/Relation.md)
 - [RaiDbSdk.S3Integration](docs/S3Integration.md)
 - [RaiDbSdk.SetOptionsAction](docs/SetOptionsAction.md)
 - [RaiDbSdk.SetOptionsActionResult](docs/SetOptionsActionResult.md)
 - [RaiDbSdk.Source](docs/Source.md)
 - [RaiDbSdk.StatusAction](docs/StatusAction.md)
 - [RaiDbSdk.StatusActionResult](docs/StatusActionResult.md)
 - [RaiDbSdk.StorageProblem](docs/StorageProblem.md)
 - [RaiDbSdk.SyntaxError](docs/SyntaxError.md)
 - [RaiDbSdk.SyntaxNode](docs/SyntaxNode.md)
 - [RaiDbSdk.Token](docs/Token.md)
 - [RaiDbSdk.Transaction](docs/Transaction.md)
 - [RaiDbSdk.TransactionResult](docs/TransactionResult.md)
 - [RaiDbSdk.UndefinedError](docs/UndefinedError.md)
 - [RaiDbSdk.UpdateAction](docs/UpdateAction.md)
 - [RaiDbSdk.UpdateActionResult](docs/UpdateActionResult.md)
 - [RaiDbSdk.WorkspaceLoadProblem](docs/WorkspaceLoadProblem.md)


## Documentation for Authorization

All endpoints do not require authorization.

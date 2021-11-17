function evalError() {
try {
    throw new EvalError('Hello', 'someFile.js', 10);
} catch (e) {
    console.log(e instanceof EvalError);
    console.log(e.message);
    console.log(e.name);
    console.log(e.fileName);
    console.log(e.lineNumber);
    console.log(e.columnNumber);
    console.log(e.stack);
    }
}   

function rangeError(n) {
    if(!(n >= -500 && n <= 500)) {
        throw new RangeError("the argument must be between -500 and 500");
    }
}
    try {
        check(2000)
    } catch(error) {
        if (error instanceof RangeError)
    {
        console.log('error i guess');
    }
}

function referenceError() {
    try {
        throw new ReferenceError('Hello', 'someFIle.js', 10)
    } catch (e) {
        console.log(e instanceof ReferenceError);
        console.log(e.message);
        console.log(e.name);
        console.log(e.fileName);
        console.log(e.lineNumber);
        console.log(e.columnNumber);
        console.log(e.stack);
    }
}

function syntaxError() {
    try {
        throw new SyntaxError('Hello', 'someFile.js', 10);
    } catch (e) {
        console.error(e instanceof SyntaxError);
        console.error(e.message);
        console.error(e.name);
        console.error(e.fileName);
        console.error(e.lineNumer);
        console.error(e.columnNumber);
        console.error(e.stack);
    }
}

function typeError() {
    try {
        throw new TypeError('Hello', 'someFile.js', 10)
    } catch (e) {
        console.log(e instanceof TypeError)
        console.log(e.message);
        console.log(e.name);
        console.log(e.fileName);
        console.log(e.lineNumber);
        console.log(e.columnNumber);
        console.log(e.stack);
    }
}

function uriError() {
    try {
        throw new URIError('Hello', 'someFile.js', 10)
    } catch (e) {
        console.log(e instanceof URIError)
        console.log(e.message);
        console.log(e.name);
        console.log(e.fileName);
        console.log(e.lineNumber);
        console.log(e.columnNumber);
        console.log(e.stack);
    }
}

function aggregateError() {
    try {
        throw new AggregateError([
            new Error('some error'),
        ], 'Hello');
    } catch (e) {
        console.log(e instanceof AggregateError);
        console.log(e.message);
        console.log(e.name);
        console.log(e.errors);
        console.log(e.stack);
    }
}

function internalError(x) {
    if (x >= 10000000000)
        return;
    internalError(x + 1);
}

function hello() {
    console.log('hi');
}

function myError() {
    try {
        throw new Error('Bonque');
    } catch(e) {
        console.log('Bonque')
    }
}



module.exports = {
    evalError,
    rangeError,
    referenceError,
    syntaxError,
    typeError,
    uriError,
    aggregateError,
    internalError,
    hello,
    myError
}
# WindowsSymbolicLinkCheck

## What is this?

This is a test code for `fs.stat` function in windows.
In my local windows environment (x64), `fs.stat` for symlink pointing to directory brings error.
However in appveyor environment (ia32), this error does not happen.

## How to do?

```
> npm Install
```

```
> npm run test
```

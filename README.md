# Issue "Could not find a declaration file for module './Mime'"

Setup is
- JS Module `ts-in-js-2` uses JS module `ts-in-js-1`
- In JS module `ts-in-js-1` there is a class `class1a`, which uses the module `mime`
- In module `ts-in-js-1` is `@types/mime` installed as a dev dependency

Current behaviour is
- TSC evaluates JS module `mime` inside ts-in-js-1 is for typing, but does not find it and errors because of further js analysis.

## Observation #1
TSC errors because it does not take dev dependency `@types/mime` from JS module `ts-in-js-1` into account.

## Observation #2
TSC does incomprehensibly take module `mime` into account. While `class1a` has `mime` as dependency, it does not reexport it. So, from a usage point of `class1a` or JS module `ts-in-js-1`, there is no justification for tsc to take `mime` into account.

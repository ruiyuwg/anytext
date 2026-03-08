# How to migrate from date to richDate

We'll soon rename Sanity's internal `date` type to `richDate`. If you're *not* using `date`, don't worry about any of the below.

This is unfortunately a breaking change. These are the three actions required of you:

### 1. Make your front-end(s) tolerate both the old and the new type

In a transition period, front-ends which consume Sanity documents and do conditional checks on `_type === 'date'`, should be updated to handle both the old `date` type and the new `richDate` type. If you don't do any checks on `_type === 'date'`, you can skip this step entirely.

### Before:

```javascript
if (value._type === 'date') {
  // ... doing something with the date value
}
```

### After:

```javascript
if (value._type === 'date' || value._type === 'richDate') {
  // ... doing something with the richDate value
}
```

Note: when all your date values are migrated (see pt. 3 below), you can safely remove the `value._type === 'date'` check.

Also note that only the `_type` attribute will change, so accessing the other attributes of your date object will work as before.

```javascript
moment(person.bornOn.utc).fromNow() // <-- this will still work
```

### 2. Modify your schema

All `date` fields must be changed.

### From this:

```javascript
{
  title: 'Birthday'
  name: 'bornOn',
  type: 'date'
}
```

### To this:

```javascript
{
  title: 'Birthday'
  name: 'bornOn',
  type: 'richDate'
}
```

Any options, as described in the [date documentation](https://www.sanity.io/docs/studio/date-type), stay the same.

### 3. Migrate your data

All documents containing one or more `date` fields must be changed to `richDate` . We have written a [script](https://github.com/sanity-io/migrations/blob/master/date-to-richdate.js) that does this automatically for you. This can be executed with the command line tool `npx` , which has been shipping with `npm` from version `5.2.0`:

```markdown
cd <your sanity studio project folder>
npx -p sanity-io/migrations date-to-richdate
```

### Yes, but why?

We're of the opinion that the type named `date` should be represented as a pure string (e.g. `'2017-02-08T01:30:00+01:00'` or `'2017-02-08T00:30:00Z'`) instead of an object. Both because this the least surprising behavior and because it conforms with the `_createdAt` and `_updatedAt` fields which are automatically maintained by the data backend.

Shortly after all `date` --> `richDate` migrations are complete, we'll release a new version of Sanity which offers two distinct date types: `date` (a string representation) and `richDate` (an object representation).

Thanks for the patience!

Want to read the developer discussion? The issue is [over here](https://github.com/sanity-io/sanity/issues/79).

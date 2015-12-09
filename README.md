# lifesavingapi

Demo API and its implementation for demonstrating TDD with Dredd.

> Requires node.js 0.12

See the API design in the `apiary.apib` API Blueprint.

See the missing implementation in the `app.js`

Install Dredd:
```
npm install -g dredd
```

Run the interactive configuration:
```
dredd init
? Location of the API blueprint: apiary.apib
? Command to start API backend server e.g. (bundle exec rails server) node app.js
? URL of tested API endpoint: http://localhost:3000
? Programming language of hooks: nodejs
? Do you want to use Apiary test inspector? Yes
? Found Travis CI configuration, do you want to add Dredd to the build? Yes

Configuration saved to dredd.yml

Run test now, with:

  $ dredd
```

Run the test and see the test failing:
```  
$ dredd
info: Beginning Dredd testing...

...

complete: 1 passing, 0 failing, 0 errors, 0 skipped, 1 total
complete: Tests took 636ms
complete: See results in Apiary at: https://app.apiary.io/public/tests/run/d65657c1-b11d-4f3e-974a-2061c65f3aa0

$ echo $?
1
```

Uncomment implementation in `app.js`:

```js
app.post('/112', function (req, res) {
  res.status(201).json({"message": "You will live!"});
});
```

Run the test and see the tests passing:
```
$ dredd
info: Beginning Dredd testing...

...

complete: 1 passing, 0 failing, 0 errors, 0 skipped, 1 total
complete: Tests took 636ms
complete: See results in Apiary at: https://app.apiary.io/public/tests/run/d65657c1-b11d-4f3e-974a-2061c65f3aa0

$ echo $?
0
```


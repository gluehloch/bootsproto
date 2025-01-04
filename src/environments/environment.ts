// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
    production: false,
    website: 'andre-winkler.de.localhost',
    cookieserviceUrl: 'http://localhost:9090/registrationservice/cookie/confirmCookie',
    // cookieserviceUrl: 'http://192.168.99.101:9090/registrationservice/cookie/confirmCookie'
    gitUrl: 'http://localhost:8080/repository',
    findUrl: 'http://localhost:8080/repository/find?file=',
    // gitUrl: 'https://gluehloch.de/git/repository/browse?path=',
};

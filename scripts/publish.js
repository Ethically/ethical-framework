const RELEASE = 'patch'
const TARGET_PACAKGE = 'ethical-utility-server'
const PACKAGE_DIRECTORY = 'packages'

const _ = require('lodash')
const fetch = require('node-fetch')
const git = require('simple-git')
const { readdirSync } = require('fs')
const { join } = require('path')
const { inc } = require('semver')

const run = async () => {

    const requests = (
        readdirSync(PACKAGE_DIRECTORY)
        .map(async package => {
            console.log(package)
            // const response = await fetch(
            //     `http://registry.npmjs.org/${package}/latest`
            // )
            // const data = await response.json()
            // return data
        })
    )

    // const npmPackageList = await Promise.all(requests)
    // const npmPackage = _.find(npmPackageList, { name: TARGET_PACAKGE })
    // const upgradedPackage = _.cloneDeep(npmPackage)
    // upgradedPackage.version = inc(npmPackage.version, RELEASE)
    //
    // const relevantNPMPackagesList = _.filter(npmPackageList, (package) => {
    //     const { dependencies = {}, devDependencies = {} } = package
    //     return dependencies[TARGET_PACAKGE] || devDependencies[TARGET_PACAKGE]
    // })
    // const relevantNPMPackages = _.keyBy(relevantNPMPackagesList, 'name')
    // const upgradedPackages = _.cloneDeep(relevantNPMPackagesList)
    // _.forEach(upgradedPackages, (package) => {
    //     const { name } = package
    //     const { version: upgradedVersion } = upgradedPackage
    //     package.version = inc(relevantNPMPackages[name].version, RELEASE)
    //     if (package.dependencies[TARGET_PACAKGE]) {
    //         package.dependencies[TARGET_PACAKGE] = upgradedVersion
    //     }
    //     if (package.devDependencies[TARGET_PACAKGE]) {
    //         package.devDependencies[TARGET_PACAKGE] = upgradedVersion
    //     }
    //     package.git = git(join(process.cwd(), PACKAGE_DIRECTORY, name))
    //     package.git.status((error, status) => {
    //         if (error) {
    //             console.error(error)
    //             return process.exit(1)
    //         }
    //         if (status.files.length) {
    //             console.log(`${package.name}: Please commit existing changes.`)
    //             process.exit(0)
    //         }
    //     })
    // })
    // _.forEach(upgradedPackages, (package) => {
    //     const { name } = package
    //     const { version: upgradedVersion } = upgradedPackage
    //     package.version = inc(relevantNPMPackages[name].version, RELEASE)
    //     if (package.dependencies[TARGET_PACAKGE]) {
    //         package.dependencies[TARGET_PACAKGE] = upgradedVersion
    //     }
    //     if (package.devDependencies[TARGET_PACAKGE]) {
    //         package.devDependencies[TARGET_PACAKGE] = upgradedVersion
    //     }
    //     package.git = git(join(process.cwd(), PACKAGE_DIRECTORY, name))
    //     package.git.status((error, status) => {
    //         if (error) {
    //             console.error(error)
    //             return process.exit(1)
    //         }
    //         if (status.files.length) {
    //             console.log(`${package.name}: Please commit existing changes.`)
    //             process.exit(0)
    //         }
    //     })
    // })
    // console.log('upgradedPackages', upgradedPackages)

    // Upgrades versions of depents and pushes to GitHub
    // Links all projects together
    // Checks if project dependencies are being used and adds them to package.json deps
}

run()


// Make sure there is no pending git commits or unpublished modules
// Run script to update README
//
// - packageModel = {
//  	pakageA: {
// 		version: '',
// 		updated: []
// 	}
// }
//
// - Iterate through all packages.
// - Get their current version number from NPM.
// - Save the current version number.
// - Foreach package, compare current dependencies in package.json with packageModel
// - If descrepency is found, update the packageVersion to packageModel + 1
// - Iterate through all packages again and if there are updates do a git commit

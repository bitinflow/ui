# bitinflow UI Kit

## Goal

The main goal of this package is to provide a clean & simple usage of common components in bitinflow brand.

## Installation

### 1. Add `@bitinflow/ui` to your `package.json` dependencies

Since this package is not released on npm (yet), we need to add `@bitinflow/ui` as dependency to our `package.json` 
file manually:

```
"@bitinflow/ui": "github:bitinflow/ui#main",
```

Install/Update the dependency:

```bash
npm install @bitinflow/ui
```

### 2. Ensure tailwind is up-to-date

- Add bitinflow colors to your `theme.extend.colors`
- Add `./node_modules/@bitinflow/ui/**/*.vue` to `content`

```
const colors = require('tailwindcss/colors')
const bitinflowColors = require('@bitinflow/ui/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...
  content: [
    ...
    './node_modules/@bitinflow/ui/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        ...
        zinc: colors.zinc,
        primary: bitinflowColors.primary,
        base: bitinflowColors.base
      }
    },
  },
}

```

## Example Skeleton

This example skeleton provides the default ui experience for dashboards, featuring first-, second- &
third-level menus.

```html

<template>
    <FloatingBanner></FloatingBanner>
    <FirstLevelMenu>
        <template v-slot:top>
            <FirstLevelLink icon="fa-home">Home</FirstLevelLink>
            <FirstLevelLink icon="fa-location-dot">Pull Zones</FirstLevelLink>
            <FirstLevelLink icon="fa-bucket">Buckets</FirstLevelLink>
            <FirstLevelLink icon="fa-meteor">Spaces</FirstLevelLink>
            <FirstLevelLink icon="fa-globe">Domains</FirstLevelLink>
            <FirstLevelLink icon="fa-list">Zones</FirstLevelLink>
        </template>

        <template v-slot:bottom>
            <FirstLevelLink icon="fa-wallet">Billing</FirstLevelLink>
            <FirstLevelLink icon="fa-fingerprint">Account</FirstLevelLink>
            <FirstLevelLink icon="fa-arrow-right-from-bracket">Logout</FirstLevelLink>
        </template>

        <SecondLevelMenu>
            <template v-slot:title>Domains</template>

            <SecondLevelLink icon="fa-globe">example.com</SecondLevelLink>
            <SecondLevelLink icon="fa-globe">example.com</SecondLevelLink>
            <SecondLevelLink icon="fa-globe">example.com</SecondLevelLink>
            <SecondLevelLink icon="fa-globe">example.com</SecondLevelLink>
        </SecondLevelMenu>

        <FlexAuto>
            <ScreenScrollContainer>
                <ThirdLevelMenu>
                    <template v-slot:title>Test</template>
                </ThirdLevelMenu>
                <Container>
                    <HeroCard>
                        <div class="text-3xl">Yeet!</div>
                    </HeroCard>
                    <Card>
                        <CardHeader>Test</CardHeader>
                        <CardBody>Test</CardBody>
                    </Card>
                    <Card>
                        <CardHeader>Test</CardHeader>
                        <CardBody>Test</CardBody>
                    </Card>
                </Container>
            </ScreenScrollContainer>
        </FlexAuto>
    </FirstLevelMenu>
</template>

<script>
    import components from "@bitinflow/ui/components";
    import {useMenu} from "@bitinflow/ui/composables";

    export default {
        components,
        setup() {
            useMenu({
                thirdLevelLinks: [
                    {
                        name: 'Test',
                        icon: 'fa-star',
                        to: 'test'
                    }
                ]
            })
        },

        methods: {
            toggleDarkMode() {
                document.body.classList.toggle('dark')
            }
        }
    }
</script>
```
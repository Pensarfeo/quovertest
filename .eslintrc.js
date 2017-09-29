module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "airbnb",
        "plugin:react/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "classes": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-native"
    ],
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [
                    ".js",
                    ".android.js",
                    ".ios.js"
                ]
            }
        }
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "strict": 0, 
        "linebreak-style": [0],
        "space-in-parens": [ "error", "never" ],
        "template-curly-spacing": [ 2, "always" ],
        "array-bracket-spacing": [ 2, "always" ],
        "object-curly-spacing": [ 2, "always" ],
        "computed-property-spacing": [ 2, "always" ],
        "no-multiple-empty-lines": [ 2, { "max": 1, "maxEOF": 0, "maxBOF": 0 } ],
        "no-multi-spaces": [ "error", {
            "exceptions": {
                "ImportDeclaration": true,
                "VariableDeclarator": true,
                "BinaryExpression": true,
                "Property": true,
                "JSXAttribute": true
            }
        }],
        "no-return-assign": [0],
        "max-len": [1, 120],
        "react/no-multi-comp": 0,
        "import/prefer-default-export": 0,
        "no-debugger": 0, 
        "jsx-a11y/href-no-hash": [0],
        "linebreak-style": ["error", "windows"],
        "react/prop-types": 0,
        "react/forbid-prop-types": 0,
        "react/require-default-props": 0,
        "react/jsx-equals-spacing": 0,
        "import/first": 0,
        "react/jsx-indent-props": [ 2,4 ],
        "react/jsx-indent": [ 2, 4 ],
        "react/jsx-filename-extension": 0,
        "react/jsx-uses-vars": 2,
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        "react-native/no-inline-styles": 2,
        "react-native/no-color-literals": 2,
        "react/jsx-curly-spacing": [2, {"when": "always", "spacing": {
            "objectLiterals": "never"
          }}]
    }
};
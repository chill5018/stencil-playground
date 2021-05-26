# Stencil Playground 

Taking a look at Stencil and its ability to be used everywhere. 

1. Install Dependencies: `yarn`
2. Build Stencil Components `yarn build:stencil` - this generates both react and vue componenents based on the web components defined in `stencil-demo`
3. Run your app (vue or react) - `yarn vue-app serve` or `yarn react-app start`

If you make changes to the stencil components, just run `yarn build:stencil` and that should update everything in your respective apps / libs.

All new components are defined in `stencil-demo`
# Validator Dashboard

An easy to use dashboard for everyday validator actions.

## Instructions

### Run locally
```
cd Validator-Dashboard
yarn
yarn dev
```
Open [http://localhost:3000](http://localhost:3000).

### Build for deploying 

After building, you can serve the .next/static folder with vercel or serve

```
cd Validator-Dashboard
yarn
yarn build
```

## To-Do list & Disclaimer

### Disclaimer
This frontend is in early development stages and will be changing over time **USE AT YOUR OWN RISK**.

### To-Do

- [X] Finish Front-End design
- [X] Conceptualize Back-End design
- [ ] Fix the API call for commission amounts
- [ ] Import the [governance code from cosmology](https://github.com/cosmology-tech/cosmos-kit/blob/main/packages/example/pages/gov.tsx) then iterate
- [ ] Copy Pasta commission API calls for staking
- [ ] Is acquring the validator address a msg type?

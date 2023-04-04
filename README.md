Functionally of the UI/UX is primarily finished. 

What remains to be added is as follows

1. Managment tab : create/edit commands and their parameters. Deploy, akash tie in. 

For deploy i need to figure out how to generate a priv key client side only and then allow the user to use the publick key from validator_priv_key to sign the create command. 

chainName confusion is sort of solved but this requires a complete rehaul of the distribution/governance box functionality. 

Biggest issue right now is how do i ensure they arent rendered the entire time but only when the user clicks the render respective button. 

```
  return (
    <Box w="full" h="full" minH={minHeight}>
      <SimpleLayout
        logo={logo}
        copyAddressButton={addressButton}
        userInfo={userInfo}
        chainDropdown={chooseChain}
        connectWalletButton={connectWalletButton}
        isFullWidth={false}
        children={undefined}
      ></SimpleLayout>
    </Box>
  );
}
```

I think the solution is to render the selectable buttons within the return then i can use the buttons to call the components on click.

chain name solution was solved by passing it as a prop to the functions then rendering them in the return in the index file. Can look into context instead but this seems to work. But rendering them in the return in order for them to update is causing me to rehaul basically everything. 

### Finished
* Valoper 
* Valcons
* ChainName

### Pending
* Distribution/Governance Box Rehaul
* Onclick button render for new simpleLayout Items
* Fix/complete all queries
* Creating Transactions for each box subset
* Build manager box
* Build Create/Edit UI
* Build deploy 1 click

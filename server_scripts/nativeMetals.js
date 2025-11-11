ServerEvents.recipes(event => {
    const oreVariants = {
      small: 2,
      poor: 3,
      normal: 5,
      rich: 7
    }

    const metals = [
      "copper",
      "gold",
      "silver",
    ]

    metals.forEach(metal => {
      Object.entries(oreVariants).forEach(([variant, outputCount]) => {
        event.custom({
          type: "create:milling",
          ingredients: [ 
            { item: `tfc:ore/${variant}_native_${metal}` }
          ],
          results: [ 
            { item: `tfc:powder/native_${metal}`, count: outputCount }
          ],
          processingTime: 200
        }).id(`kubejs:milling/${variant}_${metal}`)
      })
    })
})
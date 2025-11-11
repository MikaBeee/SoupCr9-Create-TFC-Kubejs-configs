ServerEvents.recipes(event => {
    // for metals that dont have "native" variants in TFC
    
    const oreVariants = {
        small: 2,
        poor: 3,
        normal: 5,
        rich: 7
    }

    const metals = [
        "hematite",
        "limonite",
        "magnetite",
        "cassiterite",
        "garnierite",
        "sphalerite",
        "tetrahedrite",
        "malachite",
        "bismuthinite"
    ]

    metals.forEach(metal => {
        Object.entries(oreVariants).forEach(([variant, outputCount]) => {
            event.custom({
                type: "create:milling",
                ingredients: [
                    { item: `tfc:ore/${variant}_${metal}` }
                ],
                results: [ 
                    { item: `tfc:powder/${metal}`, count: outputCount }
                ],
                processingTime: 200 
            }).id(`kubejs:milling/${variant}_${metal}`)
        })
    })
})
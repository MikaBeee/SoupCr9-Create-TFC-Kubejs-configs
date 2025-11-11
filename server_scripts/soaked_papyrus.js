ServerEvents.recipes (event => {
   event.custom({
   
    "type": "tfc:barrel_sealed",
    "input_item": {
      "ingredient": "tfc:papyrus_strip"
      },
    "input_fluid": {
      "ingredient": "minecraft:water",
      "amount": 200
    },
    "output_item": {
      "item": "tfc:soaked_papyrus_strip",
      "count": 1
    },
    "duration": 8000
  })
})

  
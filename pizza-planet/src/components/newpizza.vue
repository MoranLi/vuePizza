<template>
  <form action="">
    <h3>Add new Pizza</h3>
    <div class="form-group row">
      <label for="" class="col-sm-3">Name</label>
      <div class="col-sm-9">
        <input name="pizzaname" type="text" v-model="newPizza.name" class="form-control"/>
      </div>
    </div>
    <div class="form-group row">
      <label for="" class="col-sm-3">Description</label>
      <div class="col-sm-9">
        <textarea name="pizzadescr" type="text" v-model="newPizza.description" class="form-control" rows="5"/>
      </div>
    </div>
    <p><strong>Option 1:</strong></p>
    <div class="form-group row">
      <label for="" class="col-sm-3">Size</label>
      <div class="col-sm-9">
        <input name="pizza1size" type="number" v-model="newPizza.opitions[0].size" class="form-control"/>
      </div>
    </div>
    <div class="form-group row">
      <label for="" class="col-sm-3">Price</label>
      <div class="col-sm-9">
        <input name="pizza1price" type="number" v-model="newPizza.opitions[0].price" class="form-control"/>
      </div>
    </div>
    <p><strong>Option 2:</strong></p>
    <div class="form-group row">
      <label for="" class="col-sm-3">Size</label>
      <div class="col-sm-9">
        <input name="pizza2size" type="number" v-model="newPizza.opitions[1].size" class="form-control"/>
      </div>
    </div>
    <div class="form-group row">
      <label for="" class="col-sm-3">Price</label>
      <div class="col-sm-9">
        <input name="pizza2price" type="number" v-model="newPizza.opitions[1].price" class="form-control"/>
      </div>
    </div>
    <div class="form-group row">
      <button class="btn btn-success btn-block" @click="addPizza">Add Pizza</button>
    </div>
  </form>
</template>

<script>
import { dbMenuRef } from '../firebaseconfig.js'
export default {
  data(){
    return {
      newPizza: {
        'name':'Beef And Onion',
        'description' : 'A delieous pizza with beef and onion',
        'opitions' : [
          {
            'size': 7,
            'price': 5
          },
          {
            'size': 9,
            'price': 10
          }
        ]
      }
    }
  },
  methods: {
    addPizza(){
      dbMenuRef.push(this.newPizza)
    }
  }
}
</script>

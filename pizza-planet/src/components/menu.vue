<template>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <table class="table table-hover">
        <thead class="thead-default">
          <tr>
            <th>Size</th>
            <th>Price</th>
            <th>Add to busket</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems">
          <tr>
            <td><strong>{{ item.name }}</strong></td>
          </tr>
          <tr v-for="opition in item.opitions">
            <td>{{ opition.size }}</td>
            <td>{{ opition.price }}</td>
            <td><button class="btn btn-sm btn-outline-success" @click="addToBasket(item,opition)"></button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-sm-12 col-md-6">
      <div v-if="basket.length >0">
        <table class="table table-hover">
          <thead class="thead-default">
            <tr>
              <th>Quantity</th>
              <th>Item</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody v-for="item in basket">
            <tr>
              <td>
                <button class="btn btn-sm" type="button" @click="changeQuantity(item,1)">+</button>
                <span>{{ item.quantity }}</span>
                <button class="btn btn-sm" type="button" @click="changeQuantity(item,-1)">-</button>
              </td>
              <td>{{ item.name }}</td>
              <td>{{ item.quantity * item.price }}</td>
            </tr>
          </tbody>
        </table>
        
        <p id="total"> Order Total: {{ totalprice }}</p>
        <button class="btn btn-success btn-block">Place Order</button>
      </div>
      <div v-else>
        <p>The Busket is empty</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalprice: 0,
      basket: [],
      getMenuItems : {
        1:{
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
        },
        2:{
          'name':'Ham And Pinnapple',
          'description' : 'A delieous pizza with Ham And Pinnapple',
          'opitions' : [
            {
              'size': 7,
              'price': 6
            },
            {
              'size': 9,
              'price': 12
            }
          ]
        },
        3:{
          'name':'Three Cheese',
          'description' : 'A delieous pizza with Three Cheese',
          'opitions' : [
            {
              'size': 7,
              'price': 4
            },
            {
              'size': 9,
              'price': 8
            }
          ]
        },
        4:{
          'name':'Calforia',
          'description' : 'A delieous pizza with Calforia style',
          'opitions' : [
            {
              'size': 7,
              'price': 7
            },
            {
              'size': 9,
              'price': 14
            }
          ]
        },
      }
    }
  },
  methods:{
    addToBasket(item,opition){
      var find = 0;
      this.basket.forEach(element => {
        if(element.name == item.name){
          element.quantity++;
          find = 1;
        }
      });
      if(find == 0){
        this.basket.push({
          name: item.name,
          size: opition.size,
          price: opition.price,
          quantity: 1
        });
      }
      this.totalprice += opition.price;
    },
    changeQuantity(item,num){
      this.basket.forEach(element => {
        if(element.name == item.name){
          if(element.quantity > 1){
            element.quantity+=num;
            if(num == 1){
              this.totalprice+=element.price;
            }
            else{
              this.totalprice-=element.price;
            }
          }
          else if (element.quantity == 1){
            if(num == 1){
              element.quantity++;
              this.totalprice+=element.price;
            }
            else{
              var index = this.basket.indexOf(item);
              if (index > -1) {
                  this.basket.splice(index, 1);
              }
              this.totalprice-=element.price;
            }
          }
        }
      });
    }
  }
}
</script>

<template>
  <div class="row">
    <div class="col-md-6 col-sm-12">
      <pp-newpizza></pp-newpizza>
    </div>
    <div class="col-md-6 col-sm-12">
      <table class="table table-hover">
        <thead class="thead-default">
          <tr>
            <th>Item</th>
            <th>Remove from menu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td><button class="btn btn-outline-danger btn-small"></button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-sm-12">
      
    </div>
  </div>
</template>

<script>
import newpizza from './newpizza.vue'
export default {
  components:{
    ppNewpizza : newpizza
  }
  
}
</script>

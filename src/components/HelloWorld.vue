<template>
  <div class="hello">
    <g-signin-button
    :params="googleSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Google
  </g-signin-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      googleSignInParams: {
        client_id: '1091196648923-7darvr9uestcuiqe7rvigdrgn13ol4sp.apps.googleusercontent.com'
      }
    }
  },
  methods: {
    onSignInSuccess () {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
    },
    onSignInError () {
      // `error` contains any error occurred.
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style>

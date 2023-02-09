<template>
  <div class="login-container">
    <h1>Vue Invoices App</h1>
    <form autocomplete="off">
			<p>Login</p>
			<label for="email">Email</label>
      <input type="text" class="login-container__input" autocomplete="off" placeholder="email@email.com" id="email" v-model="username"/>
			<label for="password">Password</label>
      <input type="password" class="login-container__input" placeholder="Password" autocomplete="off" v-model="password"/>
      <div>
        <span class="question">Don't have an account yet?</span><span class="question"><a href="#" class="sign">Sign up here</a></span>

      </div>
      <button type="submit" @click.prevent="submitForm">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },

  methods: {
    submitForm() {
      console.log(`Username: ${this.username} Password: ${this.password}`);
      // Aqui você pode enviar as informações do formulário para o seu back-end
    }
  }
};
</script>

<style>
	*,
  *:before,
  *:after {
  box-sizing: border-box;
  }
  html,
  body {
    height: 100%;
}

  body{
    margin: 0;
    overflow: hidden;
  }

  #app{
    margin-top: 0;
  }

  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #141625;
    height: 100vh;
  }

	.login-container > h1{
		color: white
	}

	form > p{
		color: white;
    font-weight: bold;
    font-size: 22px;
	}

	form > label {
		display: flex;
    color: white;
    font-size: 12px;
    padding-left: 4px
	}

  form {
    background-color: #1F213A;
    padding: 30px;
    border-radius: 10px;
   
  }
  
  .question{
    float: left;
    color: white;
    font-size: 12px;
    margin: 0 0 15px 0;
  }
  .question:last-child{
    margin-left: 3px;
    font-size: 11px;
  }

  .question > a{
    color: #2E3188;

  }

  .login-container__input {
    padding-left: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: none;
		line-height: 25px;
    width: 250px;
		height: 35px;
  }
  
  input[type="password"] {
    margin-bottom: 15px
  }

  button[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: #0E0E0E;
    color: #fff;
    border: none;
    border-radius: 15px;
    font-weight: bold;
    margin-top: 30px;
  }
</style>
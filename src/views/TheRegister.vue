<template>
  <div class="login-container">
    <h1>Vue Invoices App</h1>
    <form autocomplete="off">
			<p>Login</p>
			<label for="email">Email</label>
      <input type="text" class="login-container__input" autocomplete="off" placeholder="email@email.com" id="email" v-model="username"/>
			<label for="password">Password</label>
      <input type="password" class="login-container__input" placeholder="Password" autocomplete="off" v-model="password"/>
     
      <button type="submit" @click.prevent="submitForm">Login</button>
			<a href="/" class="back-to-login">Back to Login</a>
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
  
  .login-container__input {
		display: flex;
    padding-left: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: none;
    line-height: 25px;
    width: 250px;
    height: 35px;
  }
  
  button[type="submit"] {
    margin-top: 15px;
    width: 100%;
    padding: 10px;
    background-color: #0E0E0E;
    color: #fff;
    border: none;
    border-radius: 15px;
    font-weight: bold;
    margin-top: 30px;
		margin-bottom: 30px;
  }
	.back-to-login{
		color: white;
		font-size: 13px;
	}
</style>
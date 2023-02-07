<template>
  <div class="login-container">
    <h1>Vue Invoices App</h1>
    <form >
			<p>Login</p>
			<label for="email">Email</label>
      <input type="text" autocomplete="off" placeholder="email@email.com" id="email" v-model="username"/>
			<label for="password">Password</label>
      <input type="password" placeholder="Password" v-model="password"/>
      <div>
        <label class="question">Don't have an account yet?</label><label class="question"><a href="#" class="sign">Sign up here</a></label>

      </div>
      <button type="submit" id="password" @click.prevent="submitForm">Submit</button>
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
	body{
		margin: 0;
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
		float: left;
    color: white;
    font-size: 12px;
	}
  form {
    background-color: #1F213A;
    padding: 20px;
    border-radius: 10px;
    width: 20%;
		height: 40%;
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
  input[type="text"],
  input[type="password"] {
    width: 95%;
    padding-left: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: none;
		line-height: 25px;
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
  }
</style>
<template class="container">
  <div class="login-container">
    <div class="child">
      <h1 class="login-container__title">Vue Invoices App</h1>

      <form v-if="isLogin" autocomplete="off">
        <p>Login</p>
        <label for="email">Email</label>
        <input type="text" class="login-container__input" autocomplete="off" placeholder="email@email.com" id="email" v-model="username"/>
        <label for="password">Password</label>
        <input type="password" class="login-container__input login-container__input-password" placeholder="Password" autocomplete="off" v-model="password"/>
        <div>
          <span class="question">Don't have an account yet?</span>
          <span class="question">
            <a @click="toogleIsLogin" class="sign">Sign up here</a>
          </span>
        </div>
        <button type="submit" class="login-container__submit" @click.prevent="submitForm">Login</button>
      </form>

      <form v-else autocomplete="off">
        <p>Register</p>
        <label for="email">Email</label>
        <input type="text" class="login-container__input" autocomplete="off" placeholder="email@email.com" id="email" v-model="username"/>
        <label for="password">Password</label>
        <input type="password" class="login-container__input login-container__input-password" placeholder="Password" autocomplete="off" v-model="password"/>
        <button type="submit" class="login-container__register login-container__submit" @click.prevent="submitForm">Register</button>
        <div class="login-container__back-to-login-wrapper">
          <a @click="toogleIsLogin"  class="back-to-login">Back to Login</a>
        </div>


      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin : true,
      username: '',
      password: ''
    };
  },

  methods: {
    submitForm() {
      console.log(`Username: ${this.username} Password: ${this.password}`);
      // Aqui você pode enviar as informações do formulário para o seu back-end
    },
    toogleIsLogin(){
      this.isLogin = !this.isLogin
    },
  }
};
</script>

<style>
 
  .login-container__title{
    margin-bottom: 40px;
    color: white;
  }

  .login-container {
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #141625;
  }

  .sign {
    cursor:pointer;
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

  .login-container__back-to-login-wrapper{
    margin-top: 25px;
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
    color: mediumpurple;

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
  
  .login-container__input-password {
    margin-bottom: 15px
  }

  .login-container__submit {
    width: 250px;
    padding: 10px;
    background-color: #0E0E0E;
    color: #fff;
    border: none;
    border-radius: 15px;
    font-weight: bold;
    margin-top: 30px;
  } 
  .login-container__register{
    display: block;
  }
  .back-to-login{
		color: white;
		font-size: 13px;
    cursor: pointer;
	}
</style>
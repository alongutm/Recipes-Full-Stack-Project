<template>
  <div class="container">
    <h1 class="title">Register</h1>
    <b-form @submit.prevent="onRegister" @reset.prevent="onReset">
      <!-- username input  -->
      <b-form-group
        id="input-group-username"
        label-cols-sm="3"
        label="Username:"
        label-for="username"
      >
        <b-form-input
          id="username"
          v-model="$v.form.username.$model"
          type="text"
          :state="validateState('username')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.username.required">Username is required</b-form-invalid-feedback>
        <b-form-invalid-feedback
          v-else-if="!$v.form.username.length"
        >Username length should be between 3-8 characters long</b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.username.alpha">Username alpha</b-form-invalid-feedback>
        <b-form-valid-feedback v-else />
      </b-form-group>

      <!-- first name input  -->
      <b-form-group
        id="input-group-firstName"
        label-cols-sm="3"
        label="FirstName:"
        label-for="firstName"
      >
        <b-form-input
          id="firstName"
          v-model="$v.form.firstName.$model"
          type="text"
          :state="validateState('firstName')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.firstName.required">First name is required</b-form-invalid-feedback>
        <b-form-invalid-feedback
          v-else-if="!$v.form.firstName.length"
        >First name's length should be between 2-8 characters long</b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.firstName.alpha">First tName alpha</b-form-invalid-feedback>
        <b-form-valid-feedback v-else />
      </b-form-group>

      <!-- last name input  -->
      <b-form-group
        id="input-group-lastName"
        label-cols-sm="3"
        label="LastName:"
        label-for="lastName"
      >
        <b-form-input
          id="lastName"
          v-model="$v.form.lastName.$model"
          type="text"
          :state="validateState('lastName')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.lastName.required">First name is required</b-form-invalid-feedback>
        <b-form-invalid-feedback
          v-else-if="!$v.form.lastName.length"
        >Last name's length should be between 2-8 characters long</b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.lastName.alpha">Last tName alpha</b-form-invalid-feedback>
        <b-form-valid-feedback v-else />
      </b-form-group>
      <!-- country input  -->
      <b-form-group id="input-group-country" label-cols-sm="3" label="Country:" label-for="country">
        <b-form-select
          id="country"
          v-model="$v.form.country.$model"
          :options="countries"
          :state="validateState('country')"
        ></b-form-select>
        <b-form-invalid-feedback v-if="!$v.form.country.required">Country is required</b-form-invalid-feedback>
        <b-form-valid-feedback v-else />
      </b-form-group>

      <!-- password input  -->
      <b-form-group
        id="input-group-Password"
        label-cols-sm="3"
        label="Password:"
        label-for="password"
      >
        <b-form-input
          id="password"
          type="password"
          v-model="$v.form.password.$model"
          :state="validateState('password')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.password.required">Password is required</b-form-invalid-feedback>
        <b-form-text v-else-if="$v.form.password.$error" text-variant="info">
          Your password should be
          <strong>strong</strong>.
          <br />For that, your password should be also:
        </b-form-text>
        <b-form-invalid-feedback
          v-if="$v.form.password.required && !$v.form.password.length"
        >Have length between 5-10 characters long</b-form-invalid-feedback>
        <b-form-invalid-feedback
          v-else-if="$v.form.password.required && !$v.form.password.containsNumber"
        >Contain at least one number</b-form-invalid-feedback>
        <b-form-invalid-feedback
          v-else-if="$v.form.password.required && !$v.form.password.containsSpecial"
        >Contain at least one special character</b-form-invalid-feedback>
        <b-form-valid-feedback v-else />
      </b-form-group>

      <!-- confirm password input  -->
      <b-form-group
        id="input-group-confirmedPassword"
        label-cols-sm="3"
        label="Confirm Password:"
        label-for="confirmedPassword"
      >
        <b-form-input
          id="confirmedPassword"
          type="password"
          v-model="$v.form.confirmedPassword.$model"
          :state="validateState('confirmedPassword')"
        ></b-form-input>
        <b-form-invalid-feedback
          v-if="!$v.form.confirmedPassword.required"
        >Password confirmation is required</b-form-invalid-feedback>
        <b-form-invalid-feedback
          v-if="!$v.form.confirmedPassword.required"
        >Password confirmation is required</b-form-invalid-feedback>
        <b-form-invalid-feedback
          v-else-if="!$v.form.confirmedPassword.sameAsPassword"
        >The confirmed password is not equal to the original password</b-form-invalid-feedback>
      </b-form-group>

      <!-- email input  -->
      <b-form-group id="input-group-email" label-cols-sm="3" label="Email:" label-for="email">
        <b-form-input
          id="email"
          type="email"
          v-model="$v.form.email.$model"
          :state="validateState('email')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.email.required">Email is required</b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.email">Please insert an Email address.</b-form-invalid-feedback>
      </b-form-group>

      <!-- profile picture input  -->
      <b-form-group
        id="input-group-profile_pic"
        label-cols-sm="3"
        label="Profile Picture:"
        label-for="Profile Picture"
      >
        <b-form-input
          id="profile_pic"
          type="text"
          v-model="$v.form.profile_pic.$model"
          :state="validateState('profile_pic')"
        ></b-form-input>
        <b-form-invalid-feedback
          v-if="!$v.form.profile_pic.required"
        >Profile picture's link is required</b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.profile_pic">Please insert a valid URL.</b-form-invalid-feedback>
      </b-form-group>
      <b-button type="reset" variant="danger">Reset</b-button>
      <b-button type="submit" variant="primary" style="width:250px;" class="ml-5 w-75">Register</b-button>
      <div class="mt-2">
        You have an account already?
        <router-link to="login">Log in here</router-link>
      </div>
    </b-form>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >Register failed: {{ form.submitError }}</b-alert>
    <!-- <b-card class="mt-3 md-3" header="Form Data Result">
      <pre class="m-0"><strong>form:</strong> {{ form }}</pre>
      <pre class="m-0"><strong>$v.form:</strong> {{ $v.form }}</pre>
    </b-card>-->
  </div>
</template>

<script>
import countries from "../assets/countries";
import {
  required,
  minLength,
  maxLength,
  alpha,
  sameAs,
  email,
  url
} from "vuelidate/lib/validators";

export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        firstName: "",
        lastName: "",
        country: null,
        password: "",
        confirmedPassword: "",
        email: "",
        profile_pic: "",
        submitError: undefined
      },
      countries: [{ value: null, text: "", disabled: true }],
      errors: [],
      validated: false
    };
  },
  validations: {
    form: {
      firstName: {
        required,
        length: firstName => minLength(2)(firstName) && maxLength(8)(firstName),
        alpha
      },
      lastName: {
        required,
        length: lastName => minLength(2)(lastName) && maxLength(8)(lastName),
        alpha
      },
      username: {
        required,
        length: u => minLength(3)(u) && maxLength(8)(u),
        alpha
      },
      country: {
        required
      },
      password: {
        required,
        length: p => minLength(5)(p) && maxLength(10)(p),
        containsNumber: function(value) {
          return /[0-9]/.test(value);
        },
        containsSpecial: function(value) {
          return /[#?!@$%^&*-]/.test(value);
        }
      },
      confirmedPassword: {
        required,
        sameAsPassword: sameAs("password")
      },
      email: {
        required,
        email
      },
      profile_pic: {
        required,
        url
      }
    }
  },
  mounted() {
    this.countries.push(...countries);
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Register() {
      try {
        console.log("start register");
        const response = await this.axios.post(
          "http://localhost:3000/users/register",
          // "https://test-for-3-2.herokuapp.com/user/Register",
          {
            username: this.form.username,
            password: this.form.password,
            country: this.form.country,
            firstName: this.form.firstName,
            lastName: this.form.lastName,
            email: this.form.email,
            profile_pic: this.form.profile_pic
          }
        );
        this.$router.push("/login");
        console.log(response);
      } catch (err) {
        console.log(err.response);
        //this.form.submitError = err.response.data.message;
      }
    },
    onRegister() {
      console.log("RegisterClicked");
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.Register();
    },
    onReset() {
      this.form = {
        username: "",
        firstName: "",
        lastName: "",
        country: null,
        password: "",
        confirmedPassword: "",
        email: ""
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 500px;
}
</style>

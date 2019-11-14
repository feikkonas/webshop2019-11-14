<template>

<v-container>
    <navigation/>
    <v-row>
        <v-col offset-md="3" md="6" xs="12">
            <h1 class="aa">Log in</h1>
            <div id="info">
                <v-text-field
                v-model="email"
                label="email"
                required
                >
                </v-text-field>
                                <v-text-field
                v-model="password"
                label="password"
                required
                >
                </v-text-field>
                <v-btn
                color="orange"
                @click.prevent="signIn()">
                    Login
                </v-btn>
                                <v-btn
                color="white"
                @click.prevent="signOut()">
                    SignOut
                </v-btn>

            </div>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import Navigation from '../Navigation';
import firebase from 'firebase'
import 'firebase/firestore'
    export default {
              components:{
      Navigation
    },
        data()
        {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            signIn() {
                /* console.log("testtttt", this.email, this.password) */
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
                this.$router.replace('/admin')
            })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert ("Wrong password") 
            } else {
                alert (errorMessage)
                 }
                 console.log(error)
        })
        },
    signOut() {
firebase.auth().signOut().then(() => {
alert('Logged Out')
this.replace('/')
            }).catch(error => {
                alert(error)
            }
            )
   }
    },
    }

</script>

<style lang="scss" scoped>
#info
{
    padding: 20px;
    background-color: grey;
}
.aa
{
    color: orange;
}
</style>
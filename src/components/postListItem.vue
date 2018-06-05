<template>
       <div v-for="postId in thread.posts" class="card-panel row">
        <div class="col s12">
            <p>{{posts[postId].publishedAt}}</p>
        </div>
        <div class="col s4">
            <div class="row valign-wrapper">
                <div class="col s6">
                    <img
                        :src="users[posts[postId].userId].avatar"
                        :alt="users[posts[postId].userId].name"
                        class="circle responsive-img">
                        <!-- notice the "circle" class -->
                </div>
                <div class="col s6">
                    <span class="black-text bold">
                        {{users[posts[postId].userId].name}}
                    </span>
                </div>
            </div>
        </div>
        <div class="col s8">
            <p class="grey lighten-4">{{posts[postId].text}}</p>
        </div>
    </div> 
</template>

<script>
    import ikiData from '@/data'
    export default{
        props: {
            post: {
                required: true,
                type: Object
            }
        },
        computed: {
            user () {
                return ikiData.users[this.post.userId]
            },

            jumlahpostUser (){
                const postIds = this.user.postIds
            }
        }
    }
</script>
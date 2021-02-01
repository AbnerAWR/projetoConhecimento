<template>
    <div class="article-admin">
        <b-form>
            <input id="article-id" type="hidden" v-model="article.id" />
            <b-row>
                <b-col md="6" sm='12'>
                    <b-form-group label="Nome:" label-for="article-name">
                        <b-form-input id="article-name" type="text"
                            v-model="article.name" required
                            placeholder="Informe o Nome do Artigo..."/>                       
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" sm='12'>
                    <b-form-group label="Descrição:" label-for="article-description">
                        <b-form-input id="article-description" type="text"
                            v-model="article.description" required
                            placeholder="Informe o Nome do Artigo..."/>                       
                    </b-form-group>
                </b-col>
            </b-row>
            <!-- <b-row>
                <b-col md="6" sm='12'>
                    <b-form-group label="Nome:" label-for="article-description">
                        <b-form-input id="article-description" type="text"
                            v-model="article.description" required
                            placeholder="Informe o Descrição do Artigo..."/>                       
                    </b-form-group>
                </b-col>
            </b-row> -->
        </b-form>
        <hr>
        <b-table hover striped :items="articles" :fields="fields">
            
        </b-table>
    </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl, showError } from '@/global'

export default {
    name: "ArticleAdmin",
    data: function() {
        return {
            mode: 'save',
            article: {},
            articles: [],
            fields: [
                { key: 'id', label: 'Código', sortable: true},
                { key: 'name', label: 'Nome', sortable: true},
                { key: 'description', label: 'Descrição', sortable: true},
                { key: 'actions', label: 'Ações'}
            ]
        }
    },
    methods: {
         loadArticles() {
            const url = `${baseApiUrl}/articles?page=${this.page}`
            axios.get(url).then(res => {
                this.articles = res.data.data
            })
        },
        reset() {
            this.mode = 'save'
            this.articles = {}
            this.loadArticles()
        },
        save() {
            const method = this.article.id ? 'put' : 'post'
            const id = this.article.id ? `${this.article.id}` : ''
            axios[method](`${baseApiUrl}/articles${id}`, this.articles)
                .then(() =>{
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        remove() {
            const id = this.article.id
            axios.delete(`${baseApiUrl}/articles/${id}`)
                .then.$toasted.global.defaultSuccess()
                this.reset()
        },
        loadArticle(article, mode = 'save') {
            this.mode = mode 
            this.article = { ...article }
        }
    },
    mounted() {
        this.loadArticles()
    }
}
</script>

<style>

</style>
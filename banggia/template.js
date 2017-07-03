/**
 * Created by tuanchau on 6/28/17.
 */

var localTd = {
    template: '#desktopTr',
    props: ['item'],
    name: 'local-td'
};

var localTable = {
    components:{
        localTd:localTd
    },
    template: '#desktopTable',
    props: ['value'],
    name: 'local-table',
    computed: {
        list: {
            get: function() {
                return this.value
            },
            set: function(value) {
                this.$emit('input', value)
            }
        }
    }
};
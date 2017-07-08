/**
 * Created by tuanchau on 6/28/17.
 */


var localTable = {
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
    },
    methods: {
        stockGetChangeType: detectStockValueChangeType,
        stockGetChangeValue: getStockChangeValue,
        onUpdate: function(){
            console.log("con heo");
            this.$emit('end');
        },
        onRemove: function(index){
            console.log('remove', index);
            this.list.splice(index, 1);
            this.$emit('end');
        },
        onLinkClicked: function (id) {
            console.log("click", id);
            window.open('https://banggia-hcm.vndirect.com.vn/chart/?symbol=' + id, '_blank');
        }
    }
};
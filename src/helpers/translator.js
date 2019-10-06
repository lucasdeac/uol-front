module.exports = {
    install: function (Vue, options) {
        let data = {
            'yesterday': 'Ontem',
            'today': 'Hoje',
            'tomorrow': 'Amanhã',
            'monday': 'Segunda',
            'tuesday': 'Terça',
            'wednesday': 'Quarta',
            'thursday': 'Quinta',
            'friday': 'Sexta',
            'saturday': 'Sábado',
            'sunday': 'Domingo'


        }

        Vue.filter('translate', function (value) {

            if (value != null && value.length > 1) {
                let key = value.toLowerCase()
                let dataValue = data[key];
                if (dataValue == null) {
                    return value
                }
                return dataValue
            } else {
                return ""
            }
        })
    }
}

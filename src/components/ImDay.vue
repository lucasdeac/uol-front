<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card m-3">
        <div class="card-header"><h4>IMs PP - Quem resolve?</h4></div>
        <div class="card-body">
          <table class="table table-striped table-dark">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Dias</th>
                <th scope="col">Atendente</th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="incident in incidents" :key="incident.attendant">
                    <td>{{incident.dayOfWeek | translate }} ({{ incident.date.day }}/{{ incident.date.month }})</td>
                    <td v-if="incident.attendant == null"><i class="fab fa-whatsapp text-success"></i></td>
                    <td v-if="incident.attendant != null">{{ incident.attendant }}</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      incidents: []
    }
  },
  beforeMount () {
    axios.get('im-day').then(res => {
      console.log('entrou aqui')
      this.incidents = res.data
    })
  }
}
</script>

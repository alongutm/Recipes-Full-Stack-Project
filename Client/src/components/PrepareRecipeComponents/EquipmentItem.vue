<template>
  <b-list-group v-if="equipment" horizontal flush>
    <h5>Needed equipment:</h5>
    <b-list-group-item>
      <img
        width="30rem"
        :src="`https://spoonacular.com/cdn/equipment_100x100/${equipment.image}`"
        :alt="equipment.image"
      />
      {{equipment.name}}
      <div
        v-if="equipment.temperature"
      >Temperature: {{equipment.temperature.number}} {{equipment.temperature.unit}}</div>
    </b-list-group-item>
  </b-list-group>
</template>


<script>
export default {
  name: "EquipmentItem",
  props: {
    equipment: {
      type: Object,
      required: false
    }
  }
};
</script>

<style>
</style>
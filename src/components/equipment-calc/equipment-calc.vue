<template>
  <div class="equipment-calc">
    <h1>Подбор экипировки!</h1>
    <div class="equipment-calc--title">Введите свои данные, а мы подскажем растовку и жесткость доски</div>
    <div class="equipment-calc-item">
      <label class="equipment-calc-item__label" for="weight">Вес райдера (кг):</label>
      <InputNumber id="weight" v-model="weight" :useGrouping="false" aria-describedby="username-help" />
    </div>
    <div class="equipment-calc-item">
      <label class="equipment-calc-item__label" for="height">Рост райдера (см):</label>
      <InputNumber id="height" v-model="height" :useGrouping="false" aria-describedby="username-help" />
    </div>
    <div class="equipment-calc-item">
      <label class="equipment-calc-item__label" for="gend">Пол райдера:</label>
      <Dropdown id="gend" v-model="gender" :options="genders" optionLabel="name" placeholder="Выберите пол" class="w-full md:w-14rem" disabled />
    </div>
    <div class="equipment-calc-item">
      <label class="equipment-calc-item__label" for="shoeSize">
        Размер ботинка (см): <Tippy :content="getHint()" delay="300"><i class="pi pi-question" style="font-size: 0.8rem"></i></Tippy>
      </label>
      <InputText id="shoeSize" v-model="shoeSize" aria-describedby="username-help" />
    </div>
<!--    <div class="equipment-calc-item">-->
<!--      <label class="equipment-calc-item__label" for="gend">Уровень катания:</label>-->
<!--      <Dropdown id="gend" v-model="ridingLevel" :options="ridingLevels" optionLabel="name" placeholder="Выберите уровень" class="w-full md:w-14rem" />-->
<!--    </div>-->
    <div class="equipment-calc-item">
      <label class="equipment-calc-item__label" for="gend">Тип катания:</label>
      <Dropdown id="gend" v-model="ridingType" :options="ridingTypes" optionLabel="name" placeholder="Выберите тип" class="w-full md:w-14rem" disabled />
    </div>
<!--    <div class="equipment-calc-item">-->
<!--      <label class="equipment-calc-item__label" for="gend">Ценовой сегмент:</label>-->
<!--      <Dropdown id="gend" v-model="userPriceSegment" :options="userPriceSegments" optionLabel="name" placeholder="Выберите сегмент" class="w-full md:w-14rem" />-->
<!--    </div>-->
    <Button @click="getRecommendations" class="equipment-calc-btn" label="Подобрать" icon="pi pi-check" />
  <div class="equipment-calc--result">Результат: {{ result }}</div>
  </div>
</template>

<script setup>
import {defineComponent, h, ref} from 'vue'
import Button from "primevue/button"
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import { Tippy } from 'vue-tippy'
import 'tippy.js/dist/tippy.css'
import 'primeicons/primeicons.css'
import { table } from "./config.js";
import HintSizes from "./hint-sizes.vue";

defineProps({
  msg: String,
})

const result = ref('');

const height = ref(null);

const weight = ref(null);

const gender = ref( { name: 'Мужской', code: 'M' })
const genders = ref([
  { name: 'Мужской', code: 'M' },
  { name: 'Женский', code: 'F' },
]);

const shoeSize = ref(null);

const ridingLevel = ref(null);
const ridingLevels = ref([
  { name: 'Начинающий', code: 'beginner' },
  { name: 'Прогрессирующий', code: 'intermediate' },
  { name: 'Продвинутый', code: 'advanced' },
  { name: 'Эксперт', code: 'expert' },
]);

const ridingType = ref({ name: 'All mountain', code: 'all' });
const ridingTypes = ref([
  { name: 'Фристайл', code: 'freestyle' },
  { name: 'Фрирайд', code: 'freeride' },
  { name: 'Подготовленная трасса', code: 'piste' },
  { name: 'Карвинг', code: 'carving' },
  { name: 'All mountain', code: 'all' },

]);

const userPriceSegment = ref(null);
const userPriceSegments = ref([
  { name: 'Бюджет', code: 'budget' },
  { name: 'Средний', code: 'midrange' },
  { name: 'Премиум', code: 'premium' },
]);

const getRecommendations = () => {
  const currentWeight = getCurrentWeight()
  const currentHeight = getCurrentHeight()
  console.log('getCurrentWeight: ', currentWeight, currentHeight)
  console.log('TEST SEND MESSAGE: ')
  if (currentWeight && currentHeight) {
    result.value = `Вам подойдет растовка ${table[currentHeight][currentWeight]}`
  }
}



const getCurrentWeight = () => {
  if (!weight.value) return null
  if (weight.value <= 50) {
    return "A";
  } else if (weight.value <= 59) {
    return "B";
  } else if (weight.value <= 69) {
    return "C";
  } else if (weight.value <= 79) {
    return "D";
  } else if (weight.value <= 89) {
    return "E";
  } else if (weight.value <= 99) {
    return "F";
  } else if (weight.value > 99) {
    return "G";
  }
  return null
}

const getCurrentHeight = () => {
  if (!height.value) return null
  if (height.value <= 155) {
    return "A";
  } else if (height.value <= 169) {
    return "B";
  } else if (height.value <= 182) {
    return "C";
  } else if (height.value <= 199) {
    return "D";
  } else if (height.value <= 200) {
    return "E";
  }
  return null
}

const getHint = () => {
  const component1 = defineComponent(() => {
    return () => h(HintSizes)
  })

  return component1
}

</script>

<style lang="scss" scoped>
.equipment-calc {
  display: flex;
  flex-direction: column;
  &-item {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: start;
    padding: 5px;
    &__label {
      padding-bottom: 5px;
    }
  }

  &-btn {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  &--title {
    padding: 10px;
    margin-bottom: 10px;
  }
  &--result {
    padding-top: 20px;
  }
}
</style>

<template>
<div class="container">
  <h1 class="cm-main__title">Лабораторная работа №1</h1>
  <h2 class="cm-main__title">Метод неопределенных коэффициентов</h2>
  <h3 class="cm-main__title">Вариант №3</h3>
  <span class="cm-main__initial">
    &#402;(x) =
     <span class="cm-main__fraction fraction">
      <span class="fraction__top">x</span>
      <span class="fraction__bottom">1 + x<sup>2</sup></span>
    </span>;
    [{{ segment.start }}; {{ segment.end }}]
  </span>
  <span class="cm-main__input-wrapper">
    h(шаг):
    <input v-model="step" type="number" class="cm-main__input form-control" :disabled="isApply">
  </span>

  <span class="cm-main__input-wrapper">
    n(кол-во точек разбиения):
    <input v-model="numberOfSplitPoints" type="number" class="cm-main__input form-control" :disabled="isApply">
  </span>

  <span class="cm-main__input-wrapper">
    &#949;(погрешность):
    <input v-model="epsilon" type="number" class="cm-main__input form-control" :disabled="isApply">
  </span>

  <div class="d-flex">
    <button class="cm-main__apply btn btn-primary me-1" @click="apply" :disabled="disabledApply">Применить</button>
    <button class="cm-main__apply btn btn-danger" @click="reset" :disabled="disabledReset">Отменить</button>
  </div>


  <template v-if="isApply">
    <h4 class="cm-main__title">ЦКРА</h4>
    <cm-table class="cm-main__cm-table" :items="pointsCKRA" :headers="headersCKRA" />
    <span class="cm-main__text">h (шаг) = {{ stepCKRA }}</span>
    <span class="cm-main__text">n (кол-во точек разбиения) = {{ numberOfSplitPointsCKRA }}</span>
    <span class="cm-main__text">R<sub>max</sub> = {{ rungeCKRA }}</span>
    <span class="cm-main__text">r<sub>1</sub> = {{ inaccuracyR1CKRA }}</span>
    <span class="cm-main__text">r<sub>2</sub> = {{ inaccuracyR2CKRA }}</span>
    <span class="cm-main__text">r<sub>sum</sub> = {{ inaccuracyCKRA }}</span>
    <span class="cm-main__text">E = {{ machineEpsilon }}</span>

    <h4 class="cm-main__title">ЦКРА 2</h4>
    <cm-table class="cm-main__cm-table" :items="pointsCKRA2" :headers="headersCKRA2" />
    <span class="cm-main__text">h (шаг) = {{ stepCKRA2 }}</span>
    <span class="cm-main__text">n (кол-во точек разбиения) = {{ numberOfSplitPointsCKRA2 }}</span>

    <span class="cm-main__text">R<sub>max</sub> = {{ rungeCKRA2 }}</span>
    <span class="cm-main__text">r<sub>1</sub> = {{ inaccuracyR1CKRA2 }}</span>
    <span class="cm-main__text">r<sub>2</sub> = {{ inaccuracyR2CKRA2 }}</span>
    <span class="cm-main__text">r<sub>sum</sub> = {{ inaccuracyCKRA2 }}</span>
    <span class="cm-main__text">E = {{ machineEpsilon }}</span>

    <h4 class="cm-main__title">ЛКРА</h4>
    <cm-table class="cm-main__cm-table" :items="pointsLKRA" :headers="headersLKRA" />
    <span class="cm-main__text">h (шаг) = {{ stepLKRA }}</span>
    <span class="cm-main__text">n (кол-во точек разбиения) = {{ numberOfSplitPointsLKRA }}</span>
    <span class="cm-main__text">R<sub>max</sub> = {{ rungeLKRA }}</span>
    <span class="cm-main__text">r<sub>1</sub> = {{ inaccuracyR1LKRA }}</span>
    <span class="cm-main__text">r<sub>2</sub> = {{ inaccuracyR2LKRA }}</span>
    <span class="cm-main__text">r<sub>sum</sub> = {{ inaccuracyLKRA }}</span>
    <span class="cm-main__text">E = {{ machineEpsilon }}</span>

    <h4 class="cm-main__title">ПКРА</h4>
    <cm-table class="cm-main__cm-table" :items="pointsPKRA" :headers="headersPKRA" />
    <span class="cm-main__text">h (шаг) = {{ stepPKRA }}</span>
    <span class="cm-main__text">n (кол-во точек разбиения) = {{ numberOfSplitPointsPKRA }}</span>
    <span class="cm-main__text">R<sub>max</sub> = {{ rungePKRA }}</span>
    <span class="cm-main__text">r<sub>1</sub> = {{ inaccuracyR1PKRA }}</span>
    <span class="cm-main__text">r<sub>2</sub> = {{ inaccuracyR2PKRA }}</span>
    <span class="cm-main__text">r<sub>sum</sub> = {{ inaccuracyPKRA }}</span>
    <span class="cm-main__text">E = {{ machineEpsilon }}</span>

    <cm-graphic :ckra="pointsCKRA" :ckra2="pointsCKRA2" :lkra="pointsLKRA" :pkra="pointsPKRA" />
  </template>
</div>
</template>

<script>
import {
  numberOfSplitPointsFormula,
  stepFormula,
  initialSegment,
  formulaLKRA,
  formulaPKRA,
  formulaCKRA2,
  formulaCKRA,
  machineEpsilon,
  initialPointsGenerator,
  resultKRA,
  formulaGH2,
  formulaGH3,
  formulaGH4,
  formulaGH3_r1,
  formulaGH3_r2,
  formulaGH4_r1,
  formulaGH4_r2,
  formulaGH2_r1, formulaGH2_r2
} from "../../helpers";
import CmTable from "../cmTable/CmTable.vue";
import CmGraphic from "../cmGraphic/CmGraphic.vue";

export default {
  name: "CmMain",
  components: {CmGraphic, CmTable},
  data: () => ({
    step: null,
    numberOfSplitPoints: null,
    epsilon: 0.01,
    isApply: false,
  }),
  watch: {
    step() {
      this.numberOfSplitPoints = numberOfSplitPointsFormula(this.step);
    },
    numberOfSplitPoints() {
      this.step = stepFormula(this.numberOfSplitPoints);
    }
  },
  computed: {
    segment() {
      return initialSegment;
    },
    disabledApply() {
      return this.step === null;
    },
    disabledReset() {
      return !this.isApply;
    },
    machineEpsilon() {
      return 2 ** (-machineEpsilon.mantissa);
    },

    headersCKRA() {
      return { x: { title: 'x', show: true }, y: { title: 'y', show: true }, CKRA: { title: 'ЦКРА', show: true } };
    },
    resultCKRA() {
      return resultKRA(formulaCKRA, this.step, this.epsilon);
    },
    rungeCKRA() {
      return this.resultCKRA.R;
    },
    numberOfSplitPointsCKRA() {
      return this.resultCKRA.kra.length;
    },
    stepCKRA() {
      return stepFormula(this.numberOfSplitPointsCKRA);
    },
    resultPointsCKRA() {
      return [...initialPointsGenerator(this.stepCKRA)];
    },
    pointsCKRA() {
      return this.resultCKRA.kra.map((CKRA, index) => {
        return {
          x: this.resultPointsCKRA[index].x,
          y: this.resultPointsCKRA[index].y,
          CKRA,
        }
      });
    },
    inaccuracyR1CKRA() {
      return formulaGH3_r1(this.stepCKRA);
    },
    inaccuracyR2CKRA() {
      return formulaGH3_r2(this.machineEpsilon, this.stepCKRA);
    },
    inaccuracyCKRA() {
      return formulaGH3(this.machineEpsilon, this.stepCKRA);
    },


    headersCKRA2() {
      return { x: { title: 'x', show: true }, y: { title: 'y', show: true }, CKRA2: { title: 'ЦКРА 2', show: true } };
    },
    resultCKRA2() {
      return resultKRA(formulaCKRA2, this.step, this.epsilon);
    },
    rungeCKRA2() {
      return this.resultCKRA2.R;
    },
    numberOfSplitPointsCKRA2() {
      return this.resultCKRA2.kra.length;
    },
    stepCKRA2() {
      return stepFormula(this.numberOfSplitPointsCKRA2);
    },
    resultPointsCKRA2() {
      return [...initialPointsGenerator(this.stepCKRA2)];
    },
    pointsCKRA2() {
      return this.resultCKRA2.kra.map((CKRA2, index) => {
        return {
          x: this.resultPointsCKRA2[index].x,
          y: this.resultPointsCKRA2[index].y,
          CKRA2,
        }
      });
    },
    inaccuracyR1CKRA2() {
      return formulaGH4_r1(this.stepCKRA2);
    },
    inaccuracyR2CKRA2() {
      return formulaGH4_r2(this.machineEpsilon, this.stepCKRA2);
    },
    inaccuracyCKRA2() {
      return formulaGH4(this.machineEpsilon, this.stepCKRA2);
    },



    headersLKRA() {
      return { x: { title: 'x', show: true }, y: { title: 'y', show: true }, LKRA: { title: 'ЛКРА', show: true } };
    },
    resultLKRA() {
      return resultKRA(formulaLKRA, this.step, this.epsilon);
    },
    numberOfSplitPointsLKRA() {
      return this.resultLKRA.kra.length;
    },
    rungeLKRA() {
      return this.resultLKRA.R;
    },
    stepLKRA() {
      return stepFormula(this.numberOfSplitPointsLKRA);
    },
    resultPointsLKRA() {
      return [...initialPointsGenerator(this.stepLKRA)];
    },
    pointsLKRA() {
      return this.resultLKRA.kra.map((LKRA, index) => {
        return {
          x: this.resultPointsLKRA[index].x,
          y: this.resultPointsLKRA[index].y,
          LKRA,
        }
      });
    },
    inaccuracyR1LKRA() {
      return formulaGH2_r1(this.stepLKRA);
    },
    inaccuracyR2LKRA() {
      return formulaGH2_r2(this.machineEpsilon, this.stepLKRA);
    },
    inaccuracyLKRA() {
      return formulaGH2(this.machineEpsilon, this.stepLKRA);
    },

    headersPKRA() {
      return { x: { title: 'x', show: true }, y: { title: 'y', show: true }, PKRA: { title: 'ПКРА', show: true } };
    },
    resultPKRA() {
      return resultKRA(formulaPKRA, this.step, this.epsilon);
    },
    rungePKRA() {
      return this.resultPKRA.R;
    },
    numberOfSplitPointsPKRA() {
      return this.resultPKRA.kra.length;
    },
    stepPKRA() {
      return stepFormula(this.numberOfSplitPointsPKRA);
    },
    resultPointsPKRA() {
      return [...initialPointsGenerator(this.stepPKRA)];
    },
    pointsPKRA() {
      return this.resultPKRA.kra.map((PKRA, index) => {
        return {
          x: this.resultPointsPKRA[index].x,
          y: this.resultPointsPKRA[index].y,
          PKRA,
        }
      });
    },
    inaccuracyR1PKRA() {
      return formulaGH2_r1(this.stepPKRA);
    },
    inaccuracyR2PKRA() {
      return formulaGH2_r2(this.machineEpsilon, this.stepPKRA);
    },
    inaccuracyPKRA() {
      return formulaGH2(this.machineEpsilon, this.stepPKRA);
    },

  },
  methods: {
    apply() {
      this.isApply = true;
    },
    reset() {
      this.isApply = false;
    },
  }
}
</script>

<style lang="scss" scoped>
.cm-main {
  &__title {
    text-align: center;
    margin-bottom: 15px;
  }

  &__initial {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
  }

  &__input-wrapper {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 10px;
  }

  &__input {
    max-width: 130px;
  }

  &__apply {
    margin-bottom: 20px;
  }

  &__text {
    display: block;
  }
}

.fraction {
  display: inline-block;
  text-align: center;

  &__bottom {
    border-top: 1px solid #000;
    display: block;
  }
}
</style>
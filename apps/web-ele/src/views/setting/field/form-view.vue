<script setup lang="ts">
import { reactive, ref } from 'vue';

// const props = defineProps<{
//   modelValue?: boolean;
// }>();
// 字典值
const D: any = [
  {
    dictCategoryCode: 'compo_type',
    dictCategoryName: '组件类型',
    list: [
      {
        category: 'compo_type',
        cnName: null,
        content: '',
        dictCode: 'input',
        dictionaryCategoryId: 34,
        dictionaryCategoryName: null,
        dictKey: null,
        dictName: '输入框',
        id: 277,
        sort: 20,
        state: 0,
        type: null,
      },
      {
        category: 'compo_type',
        cnName: null,
        content: '',
        dictCode: 'select',
        dictionaryCategoryId: 35,
        dictionaryCategoryName: null,
        dictKey: null,
        dictName: '下拉框',
        id: 277,
        sort: 19,
        state: 0,
        type: null,
      },
    ],
  },
];

const FormFieldMap: any = {
  input: {
    name: 'el-input',
    type: 'text',
  },
  select: {
    name: 'el-select',
  },
  textarea: {
    name: 'el-input',
    type: 'textarea',
  },
};

const mock = ref([
  {
    compoDictCode: '', // select使用
    compoFieldCode: 'project',
    compoFieldName: '项目名称',
    compoFieldValue: '',
    compoType: 'input',
    controllerShow: 0,
    dictRange: null,
    id: '1726860435013267458',
    isCustom: null,
    isDisabled: false, // 是否禁用
    isRequired: true, // 是否必填
    maxlength: 9,
    parentCompoFieldCode: null,
    parentCompoFieldValue: null,
    sort: null,
    tip: '', // 规则提示
    unit: '亿元',
  },
  {
    compoDictCode: 'unit',
    compoFieldCode: 'fee',
    compoFieldName: '项目描述',
    compoFieldValue: '',
    compoType: 'textarea',
    controllerShow: 0,
    dictRange: null,
    id: '1726860435013267457',
    isCustom: null,
    isDisabled: false, // 是否禁用
    isRequired: true, // 是否必填
    labelWidth: '100',
    maxlength: 100,
    parentCompoFieldCode: null,
    parentCompoFieldValue: null,
    sort: null,
    tip: '', // 规则提示
    unit: '', // textarea 无该属性
  },
  {
    compoDictCode: 'compo_type', // select 选项字典表
    compoFieldCode: '测试下拉框sss',
    compoFieldDesc: '',
    compoFieldName: '测试sss',
    compoFieldType: 1,
    compoLength: 9,
    compoType: 'select',
    createTime: '2024-09-09 00:00:00',
    creator: '1',
    creatorName: 'sysadmin',
    id: '1833069867547009026',
    isDel: 0,
    isDynamicDict: false,
    modifier: '1',
    modifierName: 'sysadmin',
    modifyTime: '2024-09-11 00:00:00',
    reg: '/123/',
    tip: '请输入123',
    unit: 'million',
  },
]);
interface FormValue {
  [propsName: string]: any;
}
const form: FormValue = reactive({
  email: '',
});

mock.value.forEach((item) => {
  form[item.compoFieldCode] = item.compoFieldValue;
});
</script>

<template>
  <el-form>
    <el-form-item
      v-for="item in mock"
      :key="item.id"
      :label="item.compoFieldName"
      :prop="item.compoFieldCode"
      :required="item.isRequired"
      :rules="[
        {
          required: true,
          message: item.tip,
          trigger: 'blur',
        },
      ]"
    >
      <component
        :is="FormFieldMap[item.compoType].name"
        v-model="form[item.compoFieldCode]"
        :disabled="item.isDisabled"
        :maxlength="item.maxlength"
        :type="FormFieldMap[item.compoType].type"
      >
        <template v-if="item.compoType === 'input' && item.unit" #append>
          {{ item.unit }}
        </template>
        <block v-if="item.compoType === 'select'">
          <el-option
            v-for="item in D[0].list"
            :key="item.value"
            :label="item.dictName"
            :value="item.dictCode"
          />
        </block>
      </component>
    </el-form-item>
  </el-form>
</template>

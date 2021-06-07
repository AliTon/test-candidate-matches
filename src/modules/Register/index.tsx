import React, { useState } from 'react';
import Step1 from './components/Step1';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Step2 from './components/Step2';
import { step1Schema, step2Schema } from './validators/RegisterUserSchema';
import EmployersMatches from './components/EmployersMatches';
import { GENDERS } from '../../constants';
import { IEmployer, IStep1Inputs, IStep2Inputs } from './interfaces';

enum FORM_STEPS {
  FIRST_STEP,
  SECOND_STEP,
  MATCHES
}

const Register = () => {
  const [currentStep, setCurrentStep] = useState(FORM_STEPS.FIRST_STEP);

  const step1Form = useForm<IStep1Inputs>({
    resolver: yupResolver(step1Schema),
    defaultValues: {
      gender: GENDERS[0].value
    }
  });

  const step2Form = useForm<IStep2Inputs>({
    resolver: yupResolver(step2Schema)
  });

  const getFormValues = React.useCallback(() => {
    const step1FormValues: IStep1Inputs = step1Form.getValues();
    const step2FormValues: IStep2Inputs = step2Form.getValues();
    return {
      ...step1FormValues,
      ...step2FormValues
    } as unknown as IEmployer;
  }, [step1Form, step2Form]);

  const getContentByStep = () => {
    switch (currentStep) {
      case FORM_STEPS.FIRST_STEP:
        return (
          <Step1
            register={step1Form.register}
            errors={step1Form.formState.errors}
            handleSubmit={step1Form.handleSubmit}
            onSubmit={() => setCurrentStep(FORM_STEPS.SECOND_STEP)}
            setValue={step1Form.setValue}
            getValues={step1Form.getValues}
          />
        );
      case FORM_STEPS.SECOND_STEP:
        return (
          <Step2
            register={step2Form.register}
            errors={step2Form.formState.errors}
            handleSubmit={step2Form.handleSubmit}
            onSubmit={() => setCurrentStep(FORM_STEPS.MATCHES)}
            onBack={() => setCurrentStep(FORM_STEPS.FIRST_STEP)}
            setValue={step2Form.setValue}
            getValues={step2Form.getValues}
          />
        );
      case FORM_STEPS.MATCHES:
        return (
          <EmployersMatches
            getValues={getFormValues}
            onBack={() => setCurrentStep(FORM_STEPS.SECOND_STEP)}
          />
        );
    }
  };

  return <div>{getContentByStep()}</div>;
};

export default Register;

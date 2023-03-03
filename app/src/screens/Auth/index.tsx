import { Alert } from "react-native";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Heading } from "@components/Title";
import { FormGroup } from "@components/FormGroup";
import { Button } from "@components/Button";
import Input from "@components/Input";

import { Container, Form } from "./styles";

type FormProps = {
  email: string;
  password: string;
};

const formSchema = Yup.object().shape({
  email: Yup.string()
    .required("This field is required")
    .email("This email is invalid"),
  password: Yup.string()
    .required("This field is required")
    .min(6, "This password is too short"),
});

export default function Auth() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(formSchema),
  });

  function handleClickSubmit() {
    Alert.alert("oi");
  }

  return (
    <Container>
      <Heading
        content="Welcome back! Glad to see you, Again!"
        size="XXL"
        subtitle="Don't worry! It occurs. Please enter the email address linked with your account."
      />

      <Form>
        <Controller
          name="email"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <FormGroup error={errors.email}>
              <Input
                placeholder="Enter your email"
                onChangeText={onChange}
                value={value}
              />
            </FormGroup>
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{
            required: "Senha obrigatória",
          }}
          render={({ field: { onChange, value } }) => (
            <FormGroup error={errors.password}>
              <Input
                placeholder="Enter your password"
                onChangeText={onChange}
                value={value}
              />
            </FormGroup>
          )}
        />

        <Button title="Enviar" onPress={handleSubmit(handleClickSubmit)} />
      </Form>
    </Container>
  );
}

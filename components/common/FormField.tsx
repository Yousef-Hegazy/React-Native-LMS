import Entypo from "@expo/vector-icons/Entypo";
import React, { forwardRef, RefObject, useState } from "react";
import { Control, Controller, FieldValues, RegisterOptions } from "react-hook-form";
import { NativeSyntheticEvent, Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import ThemedText from "./ThemedText";
import { useColorScheme } from "nativewind";

interface FormFieldProps<TFieldValues extends FieldValues = FieldValues> extends TextInputProps {
  title: string;
  otherStyles?: string;
  type?: "text" | "password";
  nextElement?: RefObject<TextInput>;
  control: Control<TFieldValues | any>;
  name: string;
  rules?: Omit<RegisterOptions<TFieldValues>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"> | undefined;
}

const FormField = forwardRef<TextInput, FormFieldProps>(
  ({ title, otherStyles, type = "text", nextElement, name, control, rules, ...props }, ref) => {
    const { colorScheme } = useColorScheme();
    const [showPassword, setShowPassword] = useState(false);

    const handleNextElement = (e: NativeSyntheticEvent<any>) => {
      if (nextElement) {
        nextElement.current?.focus();
      }
    };

    return (
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <View className={`space-y-2 ${otherStyles}`}>
            <ThemedText className="text-base font-medium">{title}</ThemedText>
            <View
              className={`w-full min-h-14 px-4 rounded-2xl items-center border border-neutral-300 flex-row focus:border-primary ${
                fieldState.error ? "border-red-600" : ""
              }`}
            >
              <TextInput
                ref={ref}
                {...props}
                value={field.value}
                autoCapitalize="none"
                onChangeText={(e) => field.onChange(e)}
                onBlur={field.onBlur}
                className="flex-1 dark:text-white font-msemibold text-base py-4"
                placeholder={props.placeholder || title}
                blurOnSubmit={!nextElement}
                placeholderTextColor="#7b7b8b"
                secureTextEntry={type === "password" && !showPassword}
                returnKeyType={nextElement ? "next" : props.returnKeyType || "done"}
                onSubmitEditing={(e) => {
                  e.preventDefault();
                  handleNextElement(e);
                  props.onSubmitEditing?.(e);
                }}
              />

              {type === "password" && (
                <TouchableOpacity activeOpacity={1} onPress={(e) => setShowPassword((prev) => !prev)} className="p-2">
                  <Entypo
                    name={showPassword ? "eye-with-line" : "eye"}
                    size={24}
                    color={colorScheme === "dark" ? "white" : "black"}
                  />
                </TouchableOpacity>
              )}
            </View>

            {fieldState.error?.message && (
              <Text className="text-red-600 text-sm font-pmedium">{fieldState.error.message}</Text>
            )}
          </View>
        )}
      />
    );
  }
);

export default FormField;

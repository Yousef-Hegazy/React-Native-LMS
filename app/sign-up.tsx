import FormField from "@/components/common/FormField";
import IconButton from "@/components/common/IconButton";
import ScreenHeader from "@/components/common/ScreenHeader";
import ThemedText from "@/components/common/ThemedText";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useColorScheme } from "nativewind";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "tailwindcss/colors";

interface SignUpFields {
  email: string;
  password: string;
  username: string;
  confirmPassword: string;
}

const SignUp = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const { control, handleSubmit } = useForm<SignUpFields>();
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPassRef = useRef<TextInput>(null);

  const onSubmit = (data: SignUpFields) => {
    console.log(data);
  };

  return (
    <SafeAreaView>
      <ScrollView className="h-full" keyboardShouldPersistTaps="handled">
        <ScreenHeader title="Register" />

        <ThemedText className="text-lg text-center my-4 text-neutral-600 dark:text-neutral-300">
          Enter you details below to sign up
        </ThemedText>

        <View className="px-4 flex-col">
          <FormField
            control={control}
            name="username"
            title="Username"
            nextElement={emailRef}
            rules={{ required: "Username is required" }}
          />

          <FormField
            ref={emailRef}
            control={control}
            name="email"
            title="Email"
            rules={{ required: "Email is required" }}
            otherStyles="mt-5"
            nextElement={passwordRef}
          />

          <FormField
            ref={passwordRef}
            control={control}
            name="password"
            title="Password"
            type="password"
            rules={{ required: "Password is required" }}
            otherStyles="mt-5"
            nextElement={confirmPassRef}
          />

          <FormField
            ref={confirmPassRef}
            control={control}
            name="confirmPassword"
            title="Confirm Password"
            type="password"
            rules={{
              required: "Confirm Password is required",
              validate: (val, form) => val === form.password || "Passwords don't match",
            }}
            otherStyles="mt-5"
            onSubmitEditing={handleSubmit(onSubmit)}
          />

          <TouchableOpacity activeOpacity={0.8} className="mt-3">
            <ThemedText className="underline">Forgot Password?</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            activeOpacity={0.8}
            className="mt-8 min-h-[60px] bg-primary rounded-2xl flex-row items-center justify-center"
          >
            <Ionicons name="person-add-outline" size={22} color="white" />
            <ThemedText className="text-white text-lg font-semibold ml-2">Register</ThemedText>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-center my-8">
          <IconButton activeOpacity={0.7} onPress={toggleColorScheme} containerClassName="p-4">
            {colorScheme === "dark" ? (
              <Ionicons name="sunny" size={24} color={colors.neutral[200]} />
            ) : (
              <Ionicons name="moon" size={24} color={colors.neutral[800]} />
            )}
          </IconButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

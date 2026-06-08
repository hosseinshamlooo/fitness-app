import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded bg-red-500 text-black p-4"
      >
        Create Account
      </Link>
    </View>
  );
};

export default SignIn;

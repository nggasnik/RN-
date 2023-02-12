import { Image, Center, VStack, Text, Button, Input } from "native-base";
import React from "react";
import { useState } from "react";
import { View } from "react-native";
import { API } from "../config/api";


export default function IdentifyForm() {
  const [form, addForm] = useState({
    firstName: "",
    alamat: "",
    pekerjaan: "",
    ttl:"",
  });

  const handleSubmit = async () => {
    try {
      const response = await API.post("/Form", form);
      console.log("berhasil", response);
      return response;
    } catch (error) {
      alert(" belum berhasil :( ");
    }
  };

  return (
    <View>
      <VStack>
        <Center>
        

          <Text
            width={"80%"}
            marginBottom={"20px"}
            fontSize={"36px"}
            marginTop={"40px"}
            fontWeight={"bold"}
          >
            Identitas
          </Text>
          <Input
            variant="outline"
            placeholder="Name"
            width={"90%"}
            marginBottom={"10px"}
            onChangeText={(value) => addForm({ ...form, firstName: value })}
            value={form.firstName}
          />
          <Input
            variant="outline"
            placeholder="alamat"
            width={"90%"}
            marginBottom={"10px"}
            onChangeText={(value) => addForm({ ...form, alamat: value })}
          />
          <Input
            type="pekerjaan"
            variant="outline"
            placeholder="pekerjaan"
            width={"90%"}
            marginBottom={"20px"}
            onChangeText={(value) => addForm({ ...form, pekerjaan: value })}
          />
          <Input
            type="ttl"
            variant="outline"
            placeholder="ttl"
            width={"90%"}
            marginBottom={"20px"}
            onChangeText={(value) => addForm({ ...form, ttl: value })}
          />
          <Button
            width={"90%"}
            marginTop={"10px"}
            bgColor={"danger.600"}
            height={"50px"}
            marginBottom={"20px"}
            onPress={handleSubmit}
          >
           Submit
          </Button>
        </Center>
      </VStack>
    </View>
  );
}
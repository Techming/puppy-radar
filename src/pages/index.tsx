import { useEffect } from "react";
import Head from "next/head";
import { useForm, Controller } from "react-hook-form";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { Box, Button, Image, Input, SimpleGrid } from "@chakra-ui/react";
import Navigation from "@/components/module/Navigation/Navigation";
import styles from "@/styles/Home.module.css";

interface LoginData {
  firstName: string;
  lastName: string;
  email: string;
}

export default function Home() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });
  const onSubmit = (data: LoginData) => console.log(data);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <>
      <Head>
        <title>Puppy Radar | Shelter Dogs Database</title>
      </Head>
      <Navigation />
      <main className={styles.main}>
        <Flex h={"100%"} alignItems={"flex-end"} justifyContent={"center"}>
          <Image
            src="/images/puppy-alpha.png"
            alt="a puppy"
            w={"553px"}
            maxH={"569px"}
          ></Image>
          <Flex
            h={"100%"}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"flex-start"}
          >
            <Box mb={16}>
              <Heading size="3xl" fontWeight={"bold"} lineHeight={"95px"}>
                🐕 Puppies
              </Heading>
              <Heading
                size="3xl"
                display={"inline-block"}
                fontWeight={"300"}
                mr={4}
              >
                To Be
              </Heading>
              <Heading size="3xl" display={"inline-block"} fontWeight={"bold"}>
                Saved
              </Heading>
              <Text fontSize={"4xl"} fontWeight={"bold"} mt={4}>
                Shelter Dog Match ❤️
              </Text>
            </Box>
            <Box>
              <Text fontSize={"xl"} fontWeight={"bold"}>
                Become a Hero Today
              </Text>
              <SimpleGrid columns={2} mt={4} mb={4} spacing={2}>
                <Controller
                  name="firstName"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      variant={"filled"}
                      placeholder="First Name"
                      isInvalid={!!errors?.firstName}
                      {...field}
                    />
                  )}
                />

                <Controller
                  name="lastName"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      variant={"filled"}
                      placeholder="Last Name"
                      isInvalid={!!errors?.lastName}
                      {...field}
                    />
                  )}
                />
              </SimpleGrid>
              <Flex>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      variant={"filled"}
                      placeholder="Email"
                      type="email"
                      mr={2}
                      isInvalid={!!errors?.email}
                      {...field}
                    />
                  )}
                />
                <Button
                  minW={"30%"}
                  bg={"brand.dark.800"}
                  color={"white"}
                  onClick={handleSubmit(onSubmit)}
                >
                  Get Started
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </main>
    </>
  );
}

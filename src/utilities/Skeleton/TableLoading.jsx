import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Variants() {
  return (
    <Stack
      spacing={1}
      width={"100%"}
      height={"90%"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      marginTop={2}
    >
      <Stack flexDirection={"row"} width={"97%"} justifyContent={"space-between"}>
        <Skeleton variant="rectangular" width={200} height={20} animation="wave" />
        <Skeleton variant="rectangular" width={150} height={30} animation="wave" />
      </Stack>
      <Stack spacing={1} direction={"row"}>
        {Array(4)
          .fill(0)
          .map((i) => (
            <Skeleton
              variant="rectangular"
              width={"min(22vw,230px)"}
              height={"max(7vh,40px)"}
              sx={{ bgcolor: "grey.400" }}
              animation="wave"
            />
          ))}
      </Stack>

      {Array(7)
        .fill(0)
        .map((i) => (
          <Stack spacing={1} direction={"row"}>
            {Array(4)
              .fill(0)
              .map((j) => (
                <Skeleton
                  variant="rectangular"
                  width={"min(22vw,230px)"}
                  height={"max(7vh,40px)"}
                  animation="wave"
                />
              ))}
          </Stack>
        ))}
      <Stack
        direction={"row"}
        justifyContent="flex-end"
        alignItems={"center"}
        spacing={1}
        width={"97%"}
      >
        <Skeleton variant="rectangular" width={"min(10vw,50px)"} height={40} animation="wave" />
        <Skeleton variant="rectangular" width={"min(10vw,50px)"} height={40} animation="wave" />
        <Skeleton variant="rectangular" width={"min(10vw,50px)"} height={20} animation="wave" />
      </Stack>
    </Stack>
  );
}

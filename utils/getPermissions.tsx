import * as MediaLibrary from "expo-media-library";

export const withIOSPermissions = async (callback) => {
  const { accessPrivileges, canAskAgain } =
    await MediaLibrary.getPermissionsAsync();
  if (accessPrivileges === "none" && canAskAgain) {
    const { accessPrivileges } = await MediaLibrary.requestPermissionsAsync();
    if (accessPrivileges !== "none") {
      callback();
    }
  } else if (accessPrivileges !== "none") {
    callback();
  } else {
    // 다시 권한 확인;
    withIOSPermissions(callback);
  }
};

export const withAndroidPermissions = async (callback) => {
  const { status, canAskAgain } = await MediaLibrary.getPermissionsAsync();
  if (status === "undetermined" && canAskAgain) {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== "undetermined") {
      callback();
    }
  } else if (status !== "undetermined") {
    callback();
  } else {
    withAndroidPermissions(callback);
  }
};

import styled from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

const ViewWrapper = styled(SafeAreaView)`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 24px;
`;

export default ViewWrapper;

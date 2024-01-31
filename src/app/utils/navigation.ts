import { useNavigation as useNavigationImpl } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationParamList } from '../navigator/types';

type NavigationProps = NativeStackNavigationProp<NavigationParamList>;

export const useNavigation = useNavigationImpl<NavigationProps>;
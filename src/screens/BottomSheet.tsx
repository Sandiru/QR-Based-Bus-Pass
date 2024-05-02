import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';

interface BottomSheetProps {
  setStatus: (status: boolean) => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ setStatus }) => {
  const slide = React.useRef(new Animated.Value(300)).current;
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  const slideUp = () => {
    Animated.timing(slide, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const slideDown = () => {
    Animated.timing(slide, {
      toValue: 300,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      setStatus(false);
    });
  };

  React.useEffect(() => {
    slideUp();
  }, []);

  const closeModal = () => {
    slideDown();
  };

  

  return (
    <View style={styles.backdrop}>
      <Pressable style={styles.outerPressable} onPress={closeModal}>
        <Pressable style={styles.innerPressable} onPress={() => {}}>
          <Animated.View
            style={[styles.bottomSheet, { transform: [{ translateY: slide }] }]}>
            <View style={styles.content}>
              <Text style={styles.forgotPasswordText}>Forgot Password</Text>
              <Text style={styles.enterEmailText}>
                Enter your Email or Phone Number {'\n'} for the Verification Process
              </Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your Email or Phone Number"
                />
              </View>
              <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueButtonText}>CONTINUE</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </Pressable>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    flex: 1,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  input: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
  },
  outerPressable: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  innerPressable: {
    width: '100%',
    height: '45%',
  },
  bottomSheet: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#747FFD',
  },
  enterEmailText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#747FFD',
    borderRadius: 25,
    paddingHorizontal: 20,
  },
  content: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  continueButton: {
    backgroundColor: '#747FFD',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 55,
    marginTop: 10,
  },
  continueButtonText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#fff',
  },
});

export default BottomSheet;

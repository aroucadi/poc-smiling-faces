# Dentist Mobile App - Technical Architecture Document

## 1. System Overview

### Architecture Pattern
- **Framework**: React Native 0.73+ with Expo SDK 50+
- **Architecture**: Flux architecture with Redux Toolkit
- **Navigation**: React Navigation v6 (Stack + Tab + Drawer)
- **State Management**: Redux Toolkit with RTK Query
- **Language**: TypeScript 5.x with strict mode

### Core Technical Principles
- **Performance First**: 60 FPS, <3s cold start, <500ms navigation
- **Offline First**: Core features work without internet connection
- **Security First**: End-to-end encryption, HIPAA compliance
- **Accessibility**: WCAG 2.1 AA compliance, screen reader support
- **Cross-Platform**: 95% code sharing between iOS and Android

## 2. Technology Stack

### Core Framework
```json
{
  "dependencies": {
    "react-native": "0.73.0",
    "expo": "~50.0.0",
    "react": "18.2.0",
    "typescript": "^5.0.0"
  },
  "devDependencies": {
    "@types/react": "~18.2.0",
    "@types/react-native": "~0.73.0",
    "typescript": "^5.0.0"
  }
}
```

### Navigation & UI
```json
{
  "@react-navigation/native": "^6.1.0",
  "@react-navigation/bottom-tabs": "^6.5.0",
  "@react-navigation/stack": "^6.3.0",
  "react-native-screens": "~3.29.0",
  "react-native-safe-area-context": "4.8.0",
  "native-base": "^3.4.0",
  "react-native-svg": "13.4.0"
}
```

### State Management & Data
```json
{
  "@reduxjs/toolkit": "^1.9.0",
  "react-redux": "^8.1.0",
  "@reduxjs/rtk-query": "^1.9.0",
  "@react-native-async-storage/async-storage": "1.21.0",
  "react-native-mmkv": "^2.11.0"
}
```

### Media & Camera
```json
{
  "expo-camera": "~14.0.0",
  "expo-image-picker": "~14.7.0",
  "expo-image-manipulator": "~11.8.0",
  "react-native-compressor": "^1.6.0",
  "react-native-fs": "^2.20.0"
}
```

### Authentication & Security
```json
{
  "expo-secure-store": "~12.8.0",
  "react-native-keychain": "^8.1.0",
  "react-native-biometrics": "^3.0.0",
  "expo-local-authentication": "~13.8.0",
  "react-native-crypto": "^2.2.0"
}
```

### Analytics & Monitoring
```json
{
  "@sentry/react-native": "^5.10.0",
  "@segment/analytics-react-native": "^2.15.0",
  "mixpanel-react-native": "^2.3.0",
  "react-native-device-info": "^10.8.0"
}
```

## 3. Application Architecture

### Directory Structure
```
src/
├── app/                          # App entry point and navigation
│   ├── App.tsx                   # Root component
│   ├── navigation/               # Navigation configuration
│   │   ├── RootNavigator.tsx     # Main navigation stack
│   │   ├── TabNavigator.tsx      # Bottom tab navigation
│   │   └── AuthNavigator.tsx     # Authentication flow
│   └── providers/                # App-level providers
│       ├── ReduxProvider.tsx
│       ├── ThemeProvider.tsx
│       └── SafeAreaProvider.tsx
│
├── features/                     # Feature-based modules
│   ├── auth/
│   │   ├── screens/
│   │   │   ├── LoginScreen.tsx
│   │   │   ├── SignupScreen.tsx
│   │   │   └── OnboardingScreen.tsx
│   │   ├── components/
│   │   │   ├── LoginForm.tsx
│   │   │   └── SocialLoginButtons.tsx
│   │   ├── store/
│   │   │   └── authSlice.ts
│   │   └── services/
│   │       └── authService.ts
│   │
│   ├── posts/
│   │   ├── screens/
│   │   │   ├── FeedScreen.tsx
│   │   │   ├── CreatePostScreen.tsx
│   │   │   └── PostDetailScreen.tsx
│   │   ├── components/
│   │   │   ├── PostCard.tsx
│   │   │   ├── ImageSlider.tsx
│   │   │   └── EngagementBar.tsx
│   │   ├── store/
│   │   │   └── postsSlice.ts
│   │   └── services/
│   │       └── postsService.ts
│   │
│   ├── profile/
│   │   ├── screens/
│   │   │   ├── ProfileScreen.tsx
│   │   │   ├── EditProfileScreen.tsx
│   │   │   └── SettingsScreen.tsx
│   │   ├── components/
│   │   │   ├── ProfileHeader.tsx
│   │   │   ├── StatsRow.tsx
│   │   │   └── TierBadge.tsx
│   │   └── store/
│   │       └── profileSlice.ts
│   │
│   ├── leads/
│   │   ├── screens/
│   │   │   ├── LeadsDashboard.tsx
│   │   │   └── LeadDetailScreen.tsx
│   │   ├── components/
│   │   │   ├── LeadCard.tsx
│   │   │   └── LeadFilters.tsx
│   │   └── store/
│   │       └── leadsSlice.ts
│   │
│   └── appointments/
│       ├── screens/
│       │   ├── CalendarScreen.tsx
│       │   ├── AppointmentDetailScreen.tsx
│       │   └── CreateAppointmentScreen.tsx
│       ├── components/
│       │   ├── CalendarView.tsx
│       │   ├── AppointmentCard.tsx
│       │   └── TimeSlotPicker.tsx
│       └── store/
│           └── appointmentsSlice.ts
│
├── shared/                       # Shared components and utilities
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── LoadingSpinner.tsx
│   │   └── ErrorBoundary.tsx
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── usePosts.ts
│   │   ├── useCamera.ts
│   │   └── useOffline.ts
│   ├── utils/
│   │   ├── formatters.ts
│   │   ├── validators.ts
│   │   ├── storage.ts
│   │   └── crypto.ts
│   └── constants/
│       ├── colors.ts
│       ├── fonts.ts
│       └── dimensions.ts
│
├── services/                     # External service integrations
│   ├── api/
│   │   ├── apiClient.ts          # Axios instance with interceptors
│   │   ├── endpoints.ts          # API endpoint definitions
│   │   └── errorHandler.ts       # API error handling
│   ├── instagram/
│   │   ├── instagramService.ts
│   │   └── instagramTypes.ts
│   ├── notifications/
│   │   ├── pushNotifications.ts
│   │   └── localNotifications.ts
│   └── analytics/
│       ├── analyticsService.ts
│       └── eventTypes.ts
│
└── store/                        # Global Redux store
    ├── index.ts                  # Store configuration
    ├── rootReducer.ts            # Root reducer
    └── middleware.ts             # Custom middleware
```

### Navigation Architecture
```typescript
// RootNavigator.tsx
import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigator } from './TabNavigator';
import { AuthNavigator } from './AuthNavigator';
import { useAuth } from '@shared/hooks/useAuth';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      ) : (
        <Stack.Screen name="Main" component={TabNavigator} />
      )}
    </Stack.Navigator>
  );
};
```

### State Management Architecture
```typescript
// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../services/api/apiClient';
import { rootReducer } from './rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'preferences'], // Only persist auth and preferences
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    ...persistedReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat(api.middleware),
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

## 4. Component Architecture

### Design System Components
```typescript
// shared/components/Button.tsx
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors, dimensions } from '@shared/constants';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  fullWidth = false,
}) => {
  const buttonStyles = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
  ];

  return (
    <Pressable
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled || loading}
      accessibilityRole="button"
      accessibilityState={{ disabled: disabled || loading }}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <>
          {icon && <View style={styles.icon}>{icon}</View>}
          <Text style={[styles.text, styles[`${variant}Text`]]}>{title}</Text>
        </>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: dimensions.borderRadius.medium,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
  outline: {
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: 'transparent',
  },
  // ... additional styles
});
```

### Feature Components
```typescript
// features/posts/components/PostCard.tsx
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Post } from '../types/postTypes';
import { ImageSlider } from './ImageSlider';
import { EngagementBar } from './EngagementBar';
import { usePostInteractions } from '../hooks/usePostInteractions';

interface PostCardProps {
  post: Post;
  onLike?: (postId: string) => void;
  onComment?: (postId: string) => void;
  variant?: 'feed' | 'profile' | 'detail';
}

export const PostCard: React.FC<PostCardProps> = ({
  post,
  onLike,
  onComment,
  variant = 'feed',
}) => {
  const navigation = useNavigation();
  const { likePost, isLiking } = usePostInteractions();

  const handlePress = () => {
    if (variant !== 'detail') {
      navigation.navigate('PostDetail', { postId: post.id });
    }
  };

  const handleLike = async () => {
    try {
      await likePost(post.id);
      onLike?.(post.id);
    } catch (error) {
      console.error('Failed to like post:', error);
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.header}>
        <Image source={{ uri: post.dentist.avatar }} style={styles.avatar} />
        <View style={styles.headerInfo}>
          <Text style={styles.dentistName}>{post.dentist.name}</Text>
          <Text style={styles.specialty}>{post.dentist.specialty}</Text>
        </View>
        <TierBadge tier={post.dentist.tier} />
      </View>

      <ImageSlider
        beforeImage={post.beforeImage}
        afterImage={post.afterImage}
        onImagePress={handlePress}
      />

      <View style={styles.content}>
        <Text style={styles.procedureType}>{post.procedureType}</Text>
        <Text style={styles.caption} numberOfLines={variant === 'feed' ? 2 : undefined}>
          {post.caption}
        </Text>
      </View>

      <EngagementBar
        likes={post.likesCount}
        comments={post.commentsCount}
        isLiked={post.isLiked}
        onLike={handleLike}
        onComment={() => onComment?.(post.id)}
        loading={isLiking}
      />
    </Pressable>
  );
};
```

## 5. API Integration Architecture

### API Client Configuration
```typescript
// services/api/apiClient.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootState } from '@store/index';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.EXPO_PUBLIC_API_URL,
  prepareHeaders: async (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    
    headers.set('Content-Type', 'application/json');
    headers.set('X-App-Version', process.env.EXPO_PUBLIC_APP_VERSION);
    headers.set('X-Platform', Platform.OS);
    
    return headers;
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);
  
  if (result.error && result.error.status === 401) {
    // Try to refresh token
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    
    if (refreshToken) {
      const refreshResult = await baseQuery({
        url: '/auth/refresh',
        method: 'POST',
        body: { refreshToken },
      }, api, extraOptions);
      
      if (refreshResult.data) {
        // Store new token
        api.dispatch(setCredentials(refreshResult.data));
        
        // Retry original request
        result = await baseQuery(args, api, extraOptions);
      } else {
        // Refresh failed, redirect to login
        api.dispatch(logout());
      }
    }
  }
  
  return result;
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Post', 'User', 'Appointment', 'Lead'],
  endpoints: (builder) => ({
    // Posts endpoints
    getFeed: builder.query({
      query: (page = 1) => `/posts/feed?page=${page}`,
      providesTags: (result) => 
        result ? 
          [...result.posts.map(({ id }) => ({ type: 'Post' as const, id })), 'Post'] : 
          ['Post'],
    }),
    
    createPost: builder.mutation({
      query: (postData) => ({
        url: '/posts',
        method: 'POST',
        body: postData,
      }),
      invalidatesTags: ['Post'],
    }),
    
    likePost: builder.mutation({
      query: (postId) => ({
        url: `/posts/${postId}/like`,
        method: 'POST',
      }),
      invalidatesTags: (result, error, postId) => [{ type: 'Post', id: postId }],
    }),
  }),
});

export const { useGetFeedQuery, useCreatePostMutation, useLikePostMutation } = api;
```

### Instagram Integration
```typescript
// services/instagram/instagramService.ts
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri } from 'expo-auth-session';

class InstagramService {
  private clientId: string;
  private redirectUri: string;
  
  constructor() {
    this.clientId = process.env.EXPO_PUBLIC_INSTAGRAM_CLIENT_ID;
    this.redirectUri = makeRedirectUri({
      scheme: 'instasmiles',
      path: 'instagram-auth',
    });
  }
  
  async authenticate(): Promise<string> {
    const authUrl = `https://api.instagram.com/oauth/authorize?` +
      `client_id=${this.clientId}&` +
      `redirect_uri=${this.redirectUri}&` +
      `scope=user_profile,user_media&` +
      `response_type=code`;
    
    const result = await WebBrowser.openAuthSessionAsync(authUrl, this.redirectUri);
    
    if (result.type === 'success') {
      const code = new URL(result.url).searchParams.get('code');
      return this.exchangeCodeForToken(code);
    }
    
    throw new Error('Instagram authentication failed');
  }
  
  private async exchangeCodeForToken(code: string): Promise<string> {
    const response = await fetch('https://api.instagram.com/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: this.clientId,
        client_secret: process.env.EXPO_PUBLIC_INSTAGRAM_CLIENT_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: this.redirectUri,
        code,
      }),
    });
    
    const data = await response.json();
    return data.access_token;
  }
  
  async fetchRecentPosts(accessToken: string, limit: number = 50): Promise<InstagramPost[]> {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&limit=${limit}&access_token=${accessToken}`
    );
    
    const data = await response.json();
    return data.data.map(this.transformInstagramPost);
  }
  
  private transformInstagramPost(post: any): InstagramPost {
    return {
      id: post.id,
      caption: post.caption || '',
      imageUrl: post.media_url,
      permalink: post.permalink,
      createdAt: post.timestamp,
      type: post.media_type,
    };
  }
}
```

## 6. Performance Optimization

### Image Optimization
```typescript
// shared/hooks/useOptimizedImage.ts
import { useState, useEffect } from 'react';
import { Image } from 'react-native';

interface OptimizedImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'jpeg' | 'png' | 'webp';
}

export const useOptimizedImage = (uri: string, options: OptimizedImageOptions = {}) => {
  const [optimizedUri, setOptimizedUri] = useState<string>(uri);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const optimizeImage = async () => {
      try {
        setLoading(true);
        
        // Add image optimization parameters to URL
        const optimizationParams = new URLSearchParams({
          w: options.width?.toString() || '800',
          h: options.height?.toString() || '600',
          q: options.quality?.toString() || '85',
          f: options.format || 'auto',
        });
        
        const optimizedUrl = `${uri}?${optimizationParams.toString()}`;
        
        // Prefetch the image
        await Image.prefetch(optimizedUrl);
        
        setOptimizedUri(optimizedUrl);
      } catch (err) {
        setError(err as Error);
        setOptimizedUri(uri); // Fall back to original
      } finally {
        setLoading(false);
      }
    };

    optimizeImage();
  }, [uri, options]);

  return { optimizedUri, loading, error };
};
```

### Memory Management
```typescript
// shared/hooks/useMemoryCleanup.ts
import { useEffect, useRef } from 'react';

export const useMemoryCleanup = () => {
  const cleanupFunctions = useRef<(() => void)[]>([]);

  const addCleanup = (cleanupFn: () => void) => {
    cleanupFunctions.current.push(cleanupFn);
  };

  useEffect(() => {
    return () => {
      // Execute all cleanup functions on unmount
      cleanupFunctions.current.forEach(fn => {
        try {
          fn();
        } catch (error) {
          console.error('Cleanup function failed:', error);
        }
      });
      cleanupFunctions.current = [];
    };
  }, []);

  return { addCleanup };
};

// Usage in component
export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { addCleanup } = useMemoryCleanup();
  
  useEffect(() => {
    // Load high-resolution images
    const imageUris = [post.beforeImage, post.afterImage];
    
    imageUris.forEach(uri => {
      if (uri) {
        Image.prefetch(uri);
      }
    });
    
    // Add cleanup function
    addCleanup(() => {
      // Clear image cache for this post when component unmounts
      imageUris.forEach(uri => {
        if (uri) {
          Image.queryCache([uri]).then(cached => {
            if (cached[uri] === 'disk/memory') {
              // Clear from cache if not needed
              Image.clearDiskCache();
            }
          });
        }
      });
    });
  }, [post.id, addCleanup]);
  
  return (
    // Component JSX
  );
};
```

### List Performance
```typescript
// features/posts/components/FeedList.tsx
import { FlatList, RefreshControl } from 'react-native';
import { PostCard } from './PostCard';
import { useFeed } from '../hooks/useFeed';

export const FeedList: React.FC = () => {
  const { posts, isLoading, isFetchingNextPage, fetchNextPage, refetch } = useFeed();

  const renderPost = ({ item }: { item: Post }) => (
    <PostCard
      post={item}
      onLike={handleLike}
      onComment={handleComment}
    />
  );

  const keyExtractor = (item: Post) => item.id;

  const handleEndReached = () => {
    if (!isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return (
    <FlatList
      data={posts}
      renderItem={renderPost}
      keyExtractor={keyExtractor}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.5}
      maxToRenderPerBatch={10}
      windowSize={10}
      initialNumToRender={5}
      removeClippedSubviews={true}
      getItemLayout={(data, index) => ({
        length: 400, // Approximate height of PostCard
        offset: 400 * index,
        index,
      })}
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={refetch}
          colors={['#4A90E2']}
        />
      }
    />
  );
};
```

## 7. Security Implementation

### Biometric Authentication
```typescript
// services/auth/biometricAuth.ts
import * as LocalAuthentication from 'expo-local-authentication';
import { store } from '@store/index';
import { setBiometricEnabled, setBiometricType } from '@features/auth/store/authSlice';

class BiometricAuthService {
  async isAvailable(): Promise<boolean> {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    
    return hasHardware && isEnrolled;
  }

  async getSupportedTypes(): Promise<LocalAuthentication.AuthenticationType[]> {
    return await LocalAuthentication.supportedAuthenticationTypesAsync();
  }

  async authenticate(reason: string = 'Authenticate to access your account'): Promise<boolean> {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: reason,
        fallbackLabel: 'Use passcode',
        cancelLabel: 'Cancel',
      });

      return result.success;
    } catch (error) {
      console.error('Biometric authentication failed:', error);
      return false;
    }
  }

  async enableBiometric(): Promise<void> {
    const isAvailable = await this.isAvailable();
    
    if (!isAvailable) {
      throw new Error('Biometric authentication is not available on this device');
    }

    const types = await this.getSupportedTypes();
    const type = types.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION) 
      ? 'face' 
      : 'fingerprint';

    const isAuthenticated = await this.authenticate('Enable biometric authentication');
    
    if (isAuthenticated) {
      store.dispatch(setBiometricEnabled(true));
      store.dispatch(setBiometricType(type));
      
      // Store encrypted biometric key
      await this.storeBiometricKey();
    }
  }

  private async storeBiometricKey(): Promise<void> {
    const key = await this.generateSecureKey();
    
    // Store in secure storage
    await SecureStore.setItemAsync('biometric_key', key, {
      requireAuthentication: true,
    });
  }

  private async generateSecureKey(): Promise<string> {
    // Generate cryptographically secure random key
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }
}

export const biometricAuth = new BiometricAuthService();
```

### Data Encryption
```typescript
// services/crypto/encryptionService.ts
import CryptoJS from 'crypto-js';
import { store } from '@store/index';

class EncryptionService {
  private key: string;
  
  constructor() {
    this.key = this.deriveKey();
  }

  private deriveKey(): string {
    // Derive encryption key from user credentials and device info
    const userId = store.getState().auth.user?.id;
    const deviceId = DeviceInfo.getUniqueId();
    
    return CryptoJS.PBKDF2(`${userId}:${deviceId}`, 'salt', {
      keySize: 256 / 32,
      iterations: 10000,
    }).toString();
  }

  encrypt(data: string): string {
    return CryptoJS.AES.encrypt(data, this.key).toString();
  }

  decrypt(encryptedData: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedData, this.key);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

  encryptObject<T>(obj: T): string {
    const jsonString = JSON.stringify(obj);
    return this.encrypt(jsonString);
  }

  decryptObject<T>(encryptedData: string): T {
    const decryptedString = this.decrypt(encryptedData);
    return JSON.parse(decryptedString);
  }

  // Encrypt sensitive data before storing
  async encryptAndStore(key: string, data: any): Promise<void> {
    const encrypted = this.encryptObject(data);
    await AsyncStorage.setItem(key, encrypted);
  }

  // Retrieve and decrypt sensitive data
  async retrieveAndDecrypt<T>(key: string): Promise<T | null> {
    const encrypted = await AsyncStorage.getItem(key);
    if (!encrypted) return null;
    
    return this.decryptObject<T>(encrypted);
  }
}

export const encryptionService = new EncryptionService();
```

### Certificate Pinning
```typescript
// services/api/certificatePinning.ts
import { Platform } from 'react-native';
import axios from 'axios';

// Certificate fingerprints for API endpoints
const CERTIFICATE_FINGERPRINTS = {
  production: 'SHA256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  staging: 'SHA256:yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
};

export const createSecureClient = () => {
  const client = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    timeout: 30000,
    headers: {
      'X-App-Version': process.env.EXPO_PUBLIC_APP_VERSION,
      'X-Platform': Platform.OS,
    },
  });

  // Certificate pinning for native platforms
  if (Platform.OS === 'ios' || Platform.OS === 'android') {
    client.interceptors.request.use((config) => {
      // Add certificate pinning headers
      config.headers['X-Certificate-Pin'] = CERTIFICATE_FINGERPRINTS.production;
      return config;
    });
  }

  // Response interceptor for security validation
  client.interceptors.response.use(
    (response) => {
      // Validate response headers for security indicators
      const securityHeaders = response.headers;
      
      if (!securityHeaders['x-content-type-options']) {
        console.warn('Missing X-Content-Type-Options header');
      }
      
      if (!securityHeaders['x-frame-options']) {
        console.warn('Missing X-Frame-Options header');
      }
      
      return response;
    },
    (error) => {
      if (error.response?.status === 495) {
        // Certificate validation failed
        console.error('Certificate pinning validation failed');
        // Handle certificate pinning failure
      }
      
      return Promise.reject(error);
    }
  );

  return client;
};
```

## 8. Offline Support

### Offline Queue Management
```typescript
// services/offline/offlineQueue.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';

interface OfflineAction {
  id: string;
  type: string;
  payload: any;
  timestamp: number;
  retryCount: number;
  maxRetries: number;
}

class OfflineQueueService {
  private queue: OfflineAction[] = [];
  private isProcessing = false;
  private storageKey = 'offline_queue';

  constructor() {
    this.initializeQueue();
    this.setupNetworkListener();
  }

  private async initializeQueue(): Promise<void> {
    try {
      const storedQueue = await AsyncStorage.getItem(this.storageKey);
      if (storedQueue) {
        this.queue = JSON.parse(storedQueue);
      }
    } catch (error) {
      console.error('Failed to initialize offline queue:', error);
    }
  }

  private setupNetworkListener(): void {
    NetInfo.addEventListener(async (state) => {
      if (state.isConnected && state.isInternetReachable) {
        await this.processQueue();
      }
    });
  }

  async addAction(action: Omit<OfflineAction, 'id' | 'timestamp' | 'retryCount'>): Promise<void> {
    const offlineAction: OfflineAction = {
      ...action,
      id: generateUUID(),
      timestamp: Date.now(),
      retryCount: 0,
      maxRetries: action.maxRetries || 3,
    };

    this.queue.push(offlineAction);
    await this.saveQueue();
  }

  private async processQueue(): Promise<void> {
    if (this.isProcessing || this.queue.length === 0) {
      return;
    }

    this.isProcessing = true;

    try {
      for (const action of [...this.queue]) {
        const success = await this.executeAction(action);
        
        if (success) {
          this.removeAction(action.id);
        } else {
          await this.handleFailedAction(action);
        }
      }
    } finally {
      this.isProcessing = false;
    }
  }

  private async executeAction(action: OfflineAction): Promise<boolean> {
    try {
      // Execute the action based on its type
      switch (action.type) {
        case 'CREATE_POST':
          return await this.executeCreatePost(action.payload);
        case 'LIKE_POST':
          return await this.executeLikePost(action.payload);
        case 'UPDATE_PROFILE':
          return await this.executeUpdateProfile(action.payload);
        default:
          console.warn('Unknown offline action type:', action.type);
          return false;
      }
    } catch (error) {
      console.error(`Failed to execute offline action ${action.id}:`, error);
      return false;
    }
  }

  private async handleFailedAction(action: OfflineAction): Promise<void> {
    action.retryCount++;
    
    if (action.retryCount >= action.maxRetries) {
      // Max retries reached, remove action and notify user
      this.removeAction(action.id);
      await this.notifyUserOfFailure(action);
    } else {
      // Exponential backoff
      const delay = Math.pow(2, action.retryCount) * 1000;
      setTimeout(() => this.processQueue(), delay);
    }
    
    await this.saveQueue();
  }

  private async saveQueue(): Promise<void> {
    try {
      await AsyncStorage.setItem(this.storageKey, JSON.stringify(this.queue));
    } catch (error) {
      console.error('Failed to save offline queue:', error);
    }
  }

  private removeAction(actionId: string): void {
    this.queue = this.queue.filter(action => action.id !== actionId);
    this.saveQueue();
  }

  private async notifyUserOfFailure(action: OfflineAction): Promise<void> {
    // Show local notification to user about failed action
    await LocalNotifications.scheduleNotificationAsync({
      content: {
        title: 'Action Failed',
        body: `Unable to complete ${action.type}. Please try again.`,
        data: { actionId: action.id },
      },
      trigger: null,
    });
  }
}

export const offlineQueue = new OfflineQueueService();
```

### Cache Management
```typescript
// services/cache/cacheService.ts
import { MMKV } from 'react-native-mmkv';

interface CacheConfig {
  maxSize: number; // Maximum cache size in bytes
  defaultTTL: number; // Default time-to-live in milliseconds
  cleanupInterval: number; // Cleanup interval in milliseconds
}

class CacheService {
  private storage: MMKV;
  private config: CacheConfig;
  private cleanupTimer: NodeJS.Timeout | null = null;

  constructor(config: CacheConfig = {
    maxSize: 100 * 1024 * 1024, // 100MB
    defaultTTL: 24 * 60 * 60 * 1000, // 24 hours
    cleanupInterval: 60 * 60 * 1000, // 1 hour
  }) {
    this.config = config;
    this.storage = new MMKV({
      id: 'app-cache',
      encryptionKey: this.generateEncryptionKey(),
    });
    
    this.startCleanupTimer();
  }

  async set<T>(key: string, value: T, ttl?: number): Promise<void> {
    const cacheItem = {
      value,
      timestamp: Date.now(),
      ttl: ttl || this.config.defaultTTL,
    };

    try {
      this.storage.set(key, JSON.stringify(cacheItem));
    } catch (error) {
      if (this.isStorageFull(error)) {
        await this.cleanup();
        // Retry after cleanup
        this.storage.set(key, JSON.stringify(cacheItem));
      } else {
        throw error;
      }
    }
  }

  async get<T>(key: string): Promise<T | null> {
    try {
      const cached = this.storage.getString(key);
      if (!cached) return null;

      const cacheItem = JSON.parse(cached);
      
      // Check if item has expired
      if (this.isExpired(cacheItem)) {
        this.delete(key);
        return null;
      }
      
      return cacheItem.value;
    } catch (error) {
      console.error(`Failed to get cache item ${key}:`, error);
      return null;
    }
  }

  async delete(key: string): Promise<void> {
    this.storage.delete(key);
  }

  async clear(): Promise<void> {
    this.storage.clearAll();
  }

  private isExpired(cacheItem: any): boolean {
    const age = Date.now() - cacheItem.timestamp;
    return age > cacheItem.ttl;
  }

  private async cleanup(): Promise<void> {
    const keys = this.storage.getAllKeys();
    const expiredKeys: string[] = [];
    
    keys.forEach(key => {
      const cached = this.storage.getString(key);
      if (cached) {
        try {
          const cacheItem = JSON.parse(cached);
          if (this.isExpired(cacheItem)) {
            expiredKeys.push(key);
          }
        } catch (error) {
          // Invalid cache item, delete it
          expiredKeys.push(key);
        }
      }
    });
    
    // Remove expired items
    expiredKeys.forEach(key => this.delete(key));
    
    console.log(`Cleaned up ${expiredKeys.length} expired cache items`);
  }

  private startCleanupTimer(): void {
    this.cleanupTimer = setInterval(() => {
      this.cleanup();
    }, this.config.cleanupInterval);
  }

  private generateEncryptionKey(): string {
    // Generate a device-specific encryption key
    const deviceId = DeviceInfo.getUniqueId();
    const appSecret = process.env.EXPO_PUBLIC_ENCRYPTION_SECRET;
    
    return CryptoJS.PBKDF2(`${deviceId}:${appSecret}`, 'cache-salt', {
      keySize: 256 / 32,
      iterations: 1000,
    }).toString();
  }

  private isStorageFull(error: any): boolean {
    return error.message?.includes('storage full') || 
           error.code === 'ENOSPC' ||
           error.code === 'QuotaExceededError';
  }
}

export const cacheService = new CacheService();
```

This comprehensive technical architecture document provides the complete implementation blueprint for the InstaSmiles Dentist Mobile App, ensuring optimal performance, security, and user experience while maintaining scalability and maintainability across both iOS and Android platforms.
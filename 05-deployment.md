# Dentist Mobile App - Deployment Guide

## Pre-Deployment Checklist

### Code Quality & Testing
- [ ] All unit tests pass (>90% coverage)
- [ ] Integration tests completed
- [ ] End-to-end tests pass
- [ ] Performance tests meet benchmarks
- [ ] Security vulnerability scan completed
- [ ] HIPAA compliance audit passed
- [ ] Accessibility testing completed (WCAG 2.1 AA)

### Environment Configuration
- [ ] Production API endpoints configured
- [ ] SSL certificates validated
- [ ] Push notification certificates updated
- [ ] Deep linking domains verified
- [ ] Analytics and crash reporting configured
- [ ] Feature flags properly configured

### App Store Requirements
- [ ] App store metadata prepared
- [ ] Screenshots for all device sizes
- [ ] App description and keywords optimized
- [ ] Privacy policy URL configured
- [ ] Terms of service URL configured
- [ ] Support URL configured
- [ ] Marketing URL configured (if applicable)

## Build Configuration

### iOS Build Setup
```json
// app.json configuration
{
  "expo": {
    "name": "InstaSmiles Dentist",
    "slug": "instasmiles-dentist",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0,
      "url": "https://u.expo.dev/[your-project-id]"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.instasmiles.dentist",
      "buildNumber": "1.0.0",
      "config": {
        "usesNonExemptEncryption": false
      },
      "entitlements": {
        "aps-environment": "production",
        "com.apple.developer.healthkit": true,
        "com.apple.developer.healthkit.access": ["clinical-records"]
      },
      "infoPlist": {
        "NSCameraUsageDescription": "This app needs camera access to take photos of dental work for Instagram posts",
        "NSPhotoLibraryUsageDescription": "This app needs photo library access to select images for Instagram posts",
        "NSLocationWhenInUseUsageDescription": "This app needs location access to find nearby dental practices",
        "NSFaceIDUsageDescription": "This app uses Face ID to secure access to patient data",
        "NSHealthShareUsageDescription": "This app needs access to health data to provide comprehensive patient care",
        "NSHealthUpdateUsageDescription": "This app updates health data with appointment information"
      }
    }
  }
}
```

### Android Build Setup
```json
{
  "expo": {
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      },
      "package": "com.instasmiles.dentist",
      "versionCode": 1,
      "permissions": [
        "CAMERA",
        "READ_EXTERNAL_STORAGE",
        "WRITE_EXTERNAL_STORAGE",
        "ACCESS_FINE_LOCATION",
        "USE_BIOMETRIC",
        "USE_FINGERPRINT",
        "INTERNET",
        "VIBRATE"
      ],
      "intentFilters": [
        {
          "action": "VIEW",
          "autoVerify": true,
          "data": [
            {
              "scheme": "https",
              "host": "instasmiles.com",
              "pathPrefix": "/dentist"
            }
          ],
          "category": ["BROWSABLE", "DEFAULT"]
        }
      ],
      "config": {
        "googleMaps": {
          "apiKey": "[GOOGLE_MAPS_API_KEY]"
        },
        "googleMobileAds": {
          "appId": "[ADMOB_APP_ID]"
        }
      }
    }
  }
}
```

### Environment Variables
```bash
# Production environment variables
EXPO_PUBLIC_API_URL=https://api.instasmiles.com
EXPO_PUBLIC_INSTAGRAM_APP_ID=[INSTAGRAM_APP_ID]
EXPO_PUBLIC_INSTAGRAM_APP_SECRET=[INSTAGRAM_APP_SECRET]
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=[STRIPE_PUBLISHABLE_KEY]
EXPO_PUBLIC_SENTRY_DSN=[SENTRY_DSN]
EXPO_PUBLIC_MIXPANEL_TOKEN=[MIXPANEL_TOKEN]
EXPO_PUBLIC_ONESIGNAL_APP_ID=[ONESIGNAL_APP_ID]

# iOS Specific
EXPO_PUBLIC_IOS_BUNDLE_ID=com.instasmiles.dentist
EXPO_PUBLIC_IOS_APP_STORE_ID=[APP_STORE_ID]

# Android Specific
EXPO_PUBLIC_ANDROID_PACKAGE=com.instasmiles.dentist
EXPO_PUBLIC_ANDROID_PLAY_STORE_ID=[PLAY_STORE_ID]

# Security
EXPO_PUBLIC_ENCRYPTION_KEY=[ENCRYPTION_KEY]
EXPO_PUBLIC_CERTIFICATE_PINNING_HASH=[CERTIFICATE_HASH]
```

## Build Process

### Development Build
```bash
# Install dependencies
npm install

# Run TypeScript checks
npm run type-check

# Run linting
npm run lint

# Run tests
npm test

# Build for development
npx expo prebuild --platform ios
npx expo prebuild --platform android

# Run on device/simulator
npx expo run:ios
npx expo run:android
```

### Production Build
```bash
# Clear cache and build
npx expo prebuild --clean --platform ios
npx expo prebuild --clean --platform android

# Build for production (using EAS Build)
eas build --platform ios --profile production
eas build --platform android --profile production

# Alternative: Local build
npx expo run:ios --configuration Release
npx expo run:android --variant release
```

### EAS Build Configuration
```json
// eas.json
{
  "cli": {
    "version": ">= 3.0.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "android": {
        "gradleCommand": ":app:assembleDebug"
      },
      "ios": {
        "buildConfiguration": "Debug",
        "simulator": true
      }
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      },
      "ios": {
        "simulator": false,
        "enterpriseProvisioning": "adhoc"
      }
    },
    "production": {
      "distribution": "store",
      "android": {
        "buildType": "app-bundle",
        "gradleCommand": ":app:bundleRelease"
      },
      "ios": {
        "buildConfiguration": "Release",
        "simulator": false
      },
      "env": {
        "EXPO_PUBLIC_API_URL": "https://api.instasmiles.com",
        "EXPO_PUBLIC_ENVIRONMENT": "production"
      }
    }
  },
  "submit": {
    "production": {
      "android": {
        "serviceAccountKeyPath": "./path-to-your-service-account-key.json",
        "track": "production",
        "releaseStatus": "completed"
      },
      "ios": {
        "appleId": "your-apple-id@example.com",
        "ascAppId": "1234567890",
        "appleTeamId": "ABCDE12345"
      }
    }
  }
}
```

## App Store Deployment

### iOS App Store
1. **Prepare App Store Connect**
   ```bash
   # Create app in App Store Connect
   # Configure app information, pricing, and availability
   # Set up TestFlight for beta testing
   ```

2. **Upload to App Store**
   ```bash
   # Build and submit to App Store
   eas submit --platform ios --latest
   
   # Or using Xcode
   xcodebuild -workspace ios/InstaSmiles.xcworkspace -scheme InstaSmiles -configuration Release archive -archivePath build/InstaSmiles.xcarchive
   xcodebuild -exportArchive -archivePath build/InstaSmiles.xcarchive -exportPath build -exportOptionsPlist exportOptions.plist
   ```

3. **App Store Review Guidelines**
   - Ensure HIPAA compliance documentation is ready
   - Provide test account credentials for review
   - Include detailed app description and privacy policy
   - Prepare responses to common review questions

### Google Play Store
1. **Prepare Play Console**
   ```bash
   # Create app in Google Play Console
   # Configure app signing (recommended)
   # Set up pricing and distribution
   ```

2. **Upload to Play Store**
   ```bash
   # Build and submit to Play Store
   eas submit --platform android --latest
   
   # Or manually upload AAB file
   # Upload build/android/*.aab to Play Console
   ```

3. **Play Store Requirements**
   - Complete content rating questionnaire
   - Provide data safety information
   - Include app access instructions for review
   - Set up store listing experiments

## Post-Deployment Monitoring

### Performance Monitoring
```typescript
// Sentry integration for error tracking
import * as Sentry from 'sentry-expo';

Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  enableInExpoDevelopment: false,
  debug: __DEV__,
  environment: process.env.EXPO_PUBLIC_ENVIRONMENT || 'development',
  beforeSend: (event) => {
    // Filter out sensitive data
    if (event.exception) {
      const error = event.exception.values[0];
      if (error.stacktrace) {
        error.stacktrace.frames = error.stacktrace.frames.map(frame => {
          // Remove file paths that might contain sensitive info
          if (frame.filename) {
            frame.filename = frame.filename.replace(/^.*\//, '');
          }
          return frame;
        });
      }
    }
    return event;
  },
});

// Performance monitoring
Sentry.addBreadcrumb({
  category: 'auth',
  message: 'User authenticated',
  level: 'info',
});
```

### Analytics Monitoring
```typescript
// Mixpanel integration for analytics
import mixpanel from 'mixpanel-expo';

mixpanel.init(process.env.EXPO_PUBLIC_MIXPANEL_TOKEN, {
  trackAutomaticEvents: true,
  debug: __DEV__,
});

// Track HIPAA-compliant events
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Remove any PHI from properties
  const sanitizedProperties = sanitizeProperties(properties);
  
  mixpanel.track(eventName, {
    ...sanitizedProperties,
    platform: Platform.OS,
    app_version: Constants.manifest.version,
    environment: process.env.EXPO_PUBLIC_ENVIRONMENT,
  });
};

const sanitizeProperties = (properties: Record<string, any> = {}): Record<string, any> => {
  const sanitized = { ...properties };
  
  // Remove potential PHI
  const phiKeys = ['patient_name', 'patient_id', 'ssn', 'medical_record'];
  phiKeys.forEach(key => {
    if (sanitized[key]) {
      sanitized[key] = '[REDACTED]';
    }
  });
  
  return sanitized;
};
```

### Health Checks
```typescript
// Health check implementation
class HealthCheckService {
  async performHealthCheck(): Promise<HealthStatus> {
    const checks = [
      this.checkAPIConnectivity(),
      this.checkAuthenticationService(),
      this.checkDatabaseConnection(),
      this.checkExternalServices(),
      this.checkStorageQuota(),
    ];
    
    const results = await Promise.allSettled(checks);
    
    const status: HealthStatus = {
      healthy: results.every(result => result.status === 'fulfilled'),
      timestamp: new Date().toISOString(),
      checks: results.map((result, index) => ({
        name: `check_${index}`,
        status: result.status === 'fulfilled' ? 'healthy' : 'unhealthy',
        error: result.status === 'rejected' ? result.reason : undefined,
      })),
    };
    
    return status;
  }
  
  private async checkAPIConnectivity(): Promise<boolean> {
    const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/health`);
    return response.ok;
  }
  
  private async checkAuthenticationService(): Promise<boolean> {
    // Verify authentication service is responsive
    const token = await SecureStore.getItemAsync('auth_token');
    if (!token) return true; // No token means not authenticated, which is valid
    
    const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/auth/verify`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    return response.ok;
  }
  
  private async checkStorageQuota(): Promise<boolean> {
    // Check available storage space
    const { availableStorage } = await FileSystem.getFreeDiskStorageAsync();
    const minimumStorage = 100 * 1024 * 1024; // 100MB minimum
    
    return availableStorage > minimumStorage;
  }
}
```

## Rollback Strategy

### Emergency Rollback
```typescript
// Rollback implementation
class RollbackService {
  async performEmergencyRollback(): Promise<boolean> {
    try {
      // Clear all cached data
      await SecureStore.deleteItemAsync('auth_token');
      await SecureStore.deleteItemAsync('user_data');
      await AsyncStorage.clear();
      
      // Reset app state
      await Updates.reloadAsync();
      
      return true;
    } catch (error) {
      console.error('Rollback failed:', error);
      return false;
    }
  }
  
  async notifyUsersOfRollback(): Promise<void> {
    // Send push notification about rollback
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'App Update Required',
        body: 'Please update to the latest version for the best experience.',
        data: { type: 'rollback_notification' },
      },
      trigger: null,
    });
  }
}
```

### Version Management
```bash
# Version bump script
#!/bin/bash

# Read current version from package.json
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo "Current version: $CURRENT_VERSION"

# Bump version
npm version patch # or minor, major

# Update build numbers
NEW_VERSION=$(node -p "require('./package.json').version")

# Update app.json
node -e "
const fs = require('fs');
const appJson = JSON.parse(fs.readFileSync('./app.json', 'utf8'));
appJson.expo.version = '$NEW_VERSION';
appJson.expo.ios.buildNumber = '$NEW_VERSION';
appJson.expo.android.versionCode = parseInt('$NEW_VERSION'.replace(/\./g, ''));
fs.writeFileSync('./app.json', JSON.stringify(appJson, null, 2));
"

echo "Updated to version: $NEW_VERSION"
```

## Monitoring & Maintenance

### Daily Monitoring Tasks
- [ ] Check crash reports in Sentry
- [ ] Review app store ratings and reviews
- [ ] Monitor API response times
- [ ] Check push notification delivery rates
- [ ] Review user engagement metrics

### Weekly Maintenance
- [ ] Update dependencies (security patches)
- [ ] Review analytics data for trends
- [ ] Check for new OS version compatibility
- [ ] Monitor server resource usage
- [ ] Review security logs

### Monthly Reviews
- [ ] Performance benchmarking
- [ ] Security vulnerability assessment
- [ ] HIPAA compliance audit
- [ ] User feedback analysis
- [ ] Feature usage analysis

This deployment guide ensures a smooth, secure, and compliant deployment of the dentist mobile app to both iOS and Android platforms while maintaining high availability and performance standards.
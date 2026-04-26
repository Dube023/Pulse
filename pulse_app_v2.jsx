import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Search, Home, Compass, Video, Inbox, Bookmark, User, MoreHorizontal, X, Settings, Sun, Moon, Plus, FileText, Image, Store, Radio } from 'lucide-react';

const PulseApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const primaryRed = '#EF4444';

  const bgPrimary = darkMode ? '#111827' : '#FFFFFF';
  const bgSecondary = darkMode ? '#1F2937' : '#F9FAFB';
  const bgTertiary = darkMode ? '#0F172A' : '#F3F4F6';
  const textPrimary = darkMode ? '#FFFFFF' : '#000000';
  const textSecondary = darkMode ? '#9CA3AF' : '#6B7280';
  const border = darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';

  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Dylan Brand',
      handle: '@dylanbrand',
      avatar: 'DB',
      avatarColor: '#EF4444',
      content: 'Just launched the new Pulse feature. The energy is real. 🔥',
      image: null,
      likes: 342,
      comments: 28,
      shares: 15,
      liked: false,
      timestamp: '2h',
      type: 'text'
    },
    {
      id: 2,
      author: 'Creator Spotlight',
      handle: '@creatorspotlight',
      avatar: 'CS',
      avatarColor: '#EF4444',
      content: 'Watch creators build their empire. 100k milestone celebration happening now live.',
      image: true,
      likes: 1205,
      comments: 89,
      shares: 342,
      liked: false,
      timestamp: '4h',
      type: 'image'
    },
    {
      id: 3,
      author: 'Hustlers Network',
      handle: '@hustlersnet',
      avatar: 'HN',
      avatarColor: '#EF4444',
      content: 'The midnight shift crew is on fire tonight. Workshops running until 2am 🌙',
      image: false,
      likes: 2340,
      comments: 156,
      shares: 523,
      liked: false,
      timestamp: '6h',
      type: 'video'
    }
  ]);

  const toggleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          liked: !post.liked,
          likes: post.liked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };

  const PostModal = () => {
    return (
      <div style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '1000'
      }}>
        <div style={{
          background: bgPrimary,
          borderRadius: '20px',
          padding: '2rem',
          width: '90%',
          maxWidth: '500px',
          position: 'relative'
        }}>
          <button
            onClick={() => setShowPostModal(false)}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: textSecondary
            }}
          >
            <X size={24} />
          </button>

          <h2 style={{
            margin: '0 0 2rem 0',
            fontSize: '24px',
            fontWeight: '700',
            color: textPrimary
          }}>
            What's on your mind?
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem'
          }}>
            <button
              onClick={() => {
                setShowPostModal(false);
                // Handle post thought
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                padding: '2rem',
                background: bgSecondary,
                border: `1.5px solid ${primaryRed}`,
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                color: textPrimary
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = primaryRed;
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = bgSecondary;
                e.currentTarget.style.color = textPrimary;
              }}
            >
              <FileText size={32} color={primaryRed} />
              <span style={{ fontSize: '14px', fontWeight: '600' }}>Post Thought</span>
            </button>

            <button
              onClick={() => {
                setShowPostModal(false);
                // Handle post photo/video
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                padding: '2rem',
                background: bgSecondary,
                border: `1.5px solid ${primaryRed}`,
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                color: textPrimary
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = primaryRed;
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = bgSecondary;
                e.currentTarget.style.color = textPrimary;
              }}
            >
              <Image size={32} color={primaryRed} />
              <span style={{ fontSize: '14px', fontWeight: '600' }}>Photo/Video</span>
            </button>

            <button
              onClick={() => {
                setShowPostModal(false);
                // Handle sell something
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                padding: '2rem',
                background: bgSecondary,
                border: `1.5px solid ${primaryRed}`,
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                color: textPrimary
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = primaryRed;
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = bgSecondary;
                e.currentTarget.style.color = textPrimary;
              }}
            >
              <Store size={32} color={primaryRed} />
              <span style={{ fontSize: '14px', fontWeight: '600' }}>Sell Something</span>
            </button>

            <button
              onClick={() => {
                setShowPostModal(false);
                // Handle go live
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                padding: '2rem',
                background: bgSecondary,
                border: `1.5px solid ${primaryRed}`,
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                color: textPrimary
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = primaryRed;
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = bgSecondary;
                e.currentTarget.style.color = textPrimary;
              }}
            >
              <Radio size={32} color={primaryRed} />
              <span style={{ fontSize: '14px', fontWeight: '600' }}>Go Live</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const SettingsModal = () => {
    return (
      <div style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '1000'
      }}>
        <div style={{
          background: bgPrimary,
          borderRadius: '20px',
          padding: '2rem',
          width: '90%',
          maxWidth: '400px',
          position: 'relative'
        }}>
          <button
            onClick={() => setShowSettings(false)}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: textSecondary
            }}
          >
            <X size={24} />
          </button>

          <h2 style={{
            margin: '0 0 2rem 0',
            fontSize: '24px',
            fontWeight: '700',
            color: textPrimary
          }}>
            Settings
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem',
              background: bgSecondary,
              borderRadius: '12px'
            }}>
              <span style={{ color: textPrimary, fontWeight: '500' }}>Dark Mode</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                style={{
                  background: darkMode ? primaryRed : '#E5E7EB',
                  border: 'none',
                  borderRadius: '20px',
                  width: '50px',
                  height: '28px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: darkMode ? 'flex-end' : 'flex-start',
                  padding: '2px',
                  transition: 'all 0.3s'
                }}
              >
                <div style={{
                  width: '24px',
                  height: '24px',
                  background: '#FFFFFF',
                  borderRadius: '50%'
                }} />
              </button>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '1rem',
              background: bgSecondary,
              borderRadius: '12px',
              cursor: 'pointer'
            }}>
              <User size={20} color={primaryRed} />
              <span style={{ color: textPrimary, fontWeight: '500' }}>Account Settings</span>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '1rem',
              background: bgSecondary,
              borderRadius: '12px',
              cursor: 'pointer'
            }}>
              <Bookmark size={20} color={primaryRed} />
              <span style={{ color: textPrimary, fontWeight: '500' }}>Privacy</span>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '1rem',
              background: bgSecondary,
              borderRadius: '12px',
              cursor: 'pointer'
            }}>
              <MessageCircle size={20} color={primaryRed} />
              <span style={{ color: textPrimary, fontWeight: '500' }}>Help & Support</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderFeed = () => {
    return (
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        paddingBottom: '100px'
      }}>
        {/* Story Ring */}
        <div style={{
          display: 'flex',
          gap: '12px',
          overflowX: 'auto',
          paddingBottom: '1.5rem',
          marginBottom: '1.5rem',
          borderBottom: `0.5px solid ${border}`
        }}>
          {['Your Story', 'Dylan B.', 'Creator', 'Hustle Co', 'Momentum'].map((name, i) => (
            <div key={i} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              minWidth: '80px',
              cursor: 'pointer'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: i === 0 ? bgSecondary : primaryRed,
                border: i === 0 ? `2px solid ${primaryRed}` : `2px solid ${primaryRed}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: i === 0 ? primaryRed : 'white',
                fontWeight: '600',
                fontSize: '12px',
                boxShadow: `0 2px 8px rgba(239, 68, 68, 0.2)`
              }}>
                {i === 0 ? '+' : name.charAt(0)}
              </div>
              <span style={{
                fontSize: '11px',
                color: textSecondary,
                textAlign: 'center',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: '100%'
              }}>
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Posts */}
        {posts.map(post => (
          <div key={post.id} style={{
            background: bgPrimary,
            border: `0.5px solid ${border}`,
            borderRadius: '16px',
            marginBottom: '1rem',
            overflow: 'hidden',
            boxShadow: darkMode ? '0 2px 8px rgba(0, 0, 0, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.05)'
          }}>
            {/* Post Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem 1.25rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: post.avatarColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '14px',
                  boxShadow: `0 2px 8px rgba(239, 68, 68, 0.3)`
                }}>
                  {post.avatar}
                </div>
                <div>
                  <p style={{
                    margin: '0 0 2px 0',
                    fontWeight: '600',
                    fontSize: '15px',
                    color: textPrimary
                  }}>
                    {post.author}
                  </p>
                  <p style={{
                    margin: '0',
                    fontSize: '13px',
                    color: textSecondary
                  }}>
                    {post.handle} · {post.timestamp}
                  </p>
                </div>
              </div>
              <button style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                color: textSecondary
              }}>
                <MoreHorizontal size={18} />
              </button>
            </div>

            {/* Post Content */}
            <div style={{
              padding: '0 1.25rem',
              marginBottom: '12px'
            }}>
              <p style={{
                margin: '0',
                fontSize: '15px',
                lineHeight: '1.5',
                color: textPrimary
              }}>
                {post.content}
              </p>
            </div>

            {/* Image/Video Placeholder */}
            {(post.image || post.type === 'video') && (
              <div style={{
                width: '100%',
                height: '300px',
                background: post.type === 'video' 
                  ? `linear-gradient(135deg, ${primaryRed} 0%, rgba(239, 68, 68, 0.1) 100%)`
                  : `linear-gradient(135deg, ${primaryRed} 0%, rgba(239, 68, 68, 0.05) 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: primaryRed,
                fontSize: '14px',
                marginBottom: '12px'
              }}>
                {post.type === 'video' && (
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: `rgba(239, 68, 68, 0.15)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Video size={24} color={primaryRed} />
                  </div>
                )}
              </div>
            )}

            {/* Stats */}
            <div style={{
              padding: '0 1.25rem',
              marginBottom: '12px',
              display: 'flex',
              gap: '16px',
              fontSize: '13px',
              color: textSecondary,
              borderBottom: `0.5px solid ${border}`,
              paddingBottom: '12px'
            }}>
              <span>{post.likes} likes</span>
              <span>{post.comments} comments</span>
              <span>{post.shares} shares</span>
            </div>

            {/* Actions */}
            <div style={{
              display: 'flex',
              gap: '0',
              padding: '0.5rem 0'
            }}>
              <button
                onClick={() => toggleLike(post.id)}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '8px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: post.liked ? primaryRed : textSecondary,
                  fontSize: '14px',
                  transition: 'all 0.2s',
                  fontWeight: post.liked ? '600' : '400'
                }}
              >
                <Heart size={18} fill={post.liked ? primaryRed : 'none'} />
                Like
              </button>
              <button style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '8px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: textSecondary,
                fontSize: '14px',
                transition: 'color 0.2s'
              }}>
                <MessageCircle size={18} />
                Comment
              </button>
              <button style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '8px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: textSecondary,
                fontSize: '14px',
                transition: 'color 0.2s'
              }}>
                <Share2 size={18} />
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderExplore = () => {
    return (
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        paddingBottom: '100px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '12px'
        }}>
          {[
            { title: 'Trending Now' },
            { title: 'Creator Drops' },
            { title: 'Live Events' },
            { title: 'Your Interests' },
            { title: 'Recommended' },
            { title: 'Communities' }
          ].map((item, i) => (
            <div
              key={i}
              style={{
                height: '180px',
                borderRadius: '16px',
                background: bgSecondary,
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1rem',
                cursor: 'pointer',
                color: textPrimary,
                fontWeight: '600',
                fontSize: '15px',
                transition: 'all 0.3s ease',
                border: `0.5px solid ${border}`,
                boxShadow: darkMode ? '0 2px 8px rgba(0, 0, 0, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = primaryRed;
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = bgSecondary;
                e.currentTarget.style.color = textPrimary;
              }}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderProfile = () => {
    return (
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        paddingBottom: '100px'
      }}>
        {/* Profile Header */}
        <div style={{
          background: bgPrimary,
          border: `0.5px solid ${border}`,
          borderRadius: '16px',
          padding: '2rem 1.5rem',
          marginBottom: '1.5rem',
          textAlign: 'center',
          boxShadow: darkMode ? '0 2px 8px rgba(0, 0, 0, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.05)'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: primaryRed,
            margin: '0 auto 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '32px',
            fontWeight: '700',
            boxShadow: `0 4px 12px rgba(239, 68, 68, 0.3)`
          }}>
            DB
          </div>
          <h2 style={{
            margin: '0 0 0.5rem 0',
            fontSize: '20px',
            fontWeight: '700',
            color: textPrimary
          }}>
            Dylan Brand
          </h2>
          <p style={{
            margin: '0 0 1.5rem 0',
            fontSize: '14px',
            color: primaryRed,
            fontWeight: '600'
          }}>
            @dylanbrand · Creator & Builder
          </p>
          <p style={{
            margin: '0 0 1.5rem 0',
            fontSize: '14px',
            lineHeight: '1.6',
            color: textPrimary
          }}>
            Builder, storyteller, and storefront in one profile. Turning ideas into momentum.
          </p>
          <button style={{
            background: primaryRed,
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            padding: '12px 28px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: `0 4px 12px rgba(239, 68, 68, 0.3)`,
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          >
            Edit profile
          </button>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          marginBottom: '1.5rem'
        }}>
          {[
            { label: 'Followers', value: '28.4K' },
            { label: 'Following', value: '1.2K' },
            { label: 'Engagement', value: '91%' }
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                background: bgSecondary,
                border: `0.5px solid ${border}`,
                borderRadius: '12px',
                padding: '1rem',
                textAlign: 'center'
              }}
            >
              <p style={{
                margin: '0 0 0.5rem 0',
                fontSize: '12px',
                color: primaryRed,
                fontWeight: '700',
                textTransform: 'uppercase'
              }}>
                {stat.label}
              </p>
              <p style={{
                margin: '0',
                fontSize: '22px',
                fontWeight: '700',
                color: textPrimary
              }}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <p style={{
          fontSize: '13px',
          color: primaryRed,
          fontWeight: '700',
          marginBottom: '1rem'
        }}>
          Recent Posts
        </p>

        {/* Recent Posts Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px'
        }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              style={{
                height: '180px',
                borderRadius: '12px',
                background: primaryRed,
                cursor: 'pointer',
                border: `0.5px solid ${border}`,
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      background: bgTertiary,
      fontFamily: 'var(--font-sans)',
      overflow: 'hidden'
    }}>
      {/* Main Content */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Header */}
        <div style={{
          background: bgPrimary,
          borderBottom: `0.5px solid ${border}`,
          padding: '1rem 2rem',
          position: 'sticky',
          top: '0',
          zIndex: '100',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: primaryRed,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '700',
              fontSize: '18px',
              boxShadow: `0 2px 8px rgba(239, 68, 68, 0.3)`
            }}>
              P
            </div>
            <h1 style={{
              margin: '0',
              fontSize: '20px',
              fontWeight: '700',
              color: primaryRed
            }}>
              Pulse
            </h1>
          </div>

          <button
            onClick={() => setShowSettings(true)}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: textPrimary,
              padding: '8px'
            }}
          >
            <Settings size={24} />
          </button>
        </div>

        {/* Content */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1.5rem 2rem',
          maxWidth: '900px',
          margin: '0 auto',
          width: '100%'
        }}>
          {activeTab === 'home' && renderFeed()}
          {activeTab === 'explore' && renderExplore()}
          {activeTab === 'profile' && renderProfile()}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        background: bgPrimary,
        borderTop: `1px solid ${border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4rem',
        padding: '1.5rem 0',
        zIndex: '200',
        backdropFilter: 'blur(10px)'
      }}>
        {[
          { id: 'home', icon: Home, label: 'Home', color: '#3B82F6' },
          { id: 'explore', icon: Compass, label: 'Explore', color: '#FBBF24' },
          {
            id: 'post',
            icon: Plus,
            label: 'Post',
            onClick: () => setShowPostModal(true),
            special: true,
            size: 40
          },
          { id: 'store', icon: Store, label: 'Store', color: '#10B981' },
          { id: 'profile', icon: User, label: 'Profile', color: primaryRed }
        ].map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          const isSpecial = item.special;
          const iconSize = item.size || 28;
          const color = item.color || primaryRed;

          return (
            <button
              key={item.id}
              onClick={() => {
                if (item.onClick) item.onClick();
                else setActiveTab(item.id);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                border: 'none',
                borderRadius: '0',
                cursor: 'pointer',
                color: isSpecial ? color : isActive ? color : textSecondary,
                transition: 'all 0.3s ease',
                position: 'relative',
                padding: isSpecial ? '8px' : '4px',
                filter: isSpecial || isActive 
                  ? `drop-shadow(0 0 12px rgba(${parseInt(color.slice(1,3), 16)}, ${parseInt(color.slice(3,5), 16)}, ${parseInt(color.slice(5,7), 16)}, 0.7))`
                  : 'drop-shadow(0 0 0px rgba(0, 0, 0, 0))'
              }}
              onMouseOver={(e) => {
                if (isSpecial) {
                  e.currentTarget.style.filter = `drop-shadow(0 0 20px rgba(${parseInt(color.slice(1,3), 16)}, ${parseInt(color.slice(3,5), 16)}, ${parseInt(color.slice(5,7), 16)}, 0.9))`;
                  e.currentTarget.style.transform = 'scale(1.15)';
                } else if (!isActive) {
                  e.currentTarget.style.color = color;
                  e.currentTarget.style.filter = `drop-shadow(0 0 8px rgba(${parseInt(color.slice(1,3), 16)}, ${parseInt(color.slice(3,5), 16)}, ${parseInt(color.slice(5,7), 16)}, 0.5))`;
                  e.currentTarget.style.transform = 'scale(1.1)';
                } else {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }
              }}
              onMouseOut={(e) => {
                if (isSpecial) {
                  e.currentTarget.style.filter = `drop-shadow(0 0 12px rgba(${parseInt(color.slice(1,3), 16)}, ${parseInt(color.slice(3,5), 16)}, ${parseInt(color.slice(5,7), 16)}, 0.7))`;
                  e.currentTarget.style.transform = 'scale(1)';
                } else if (!isActive) {
                  e.currentTarget.style.color = textSecondary;
                  e.currentTarget.style.filter = 'drop-shadow(0 0 0px rgba(0, 0, 0, 0))';
                  e.currentTarget.style.transform = 'scale(1)';
                } else {
                  e.currentTarget.style.transform = 'scale(1)';
                }
              }}
              title={item.label}
            >
              <Icon size={isSpecial ? iconSize * 2 : iconSize} strokeWidth={isSpecial ? 1.5 : 2} />
            </button>
          );
        })}
      </div>

      {/* Modals */}
      {showPostModal && <PostModal />}
      {showSettings && <SettingsModal />}
    </div>
  );
};

export default PulseApp;
